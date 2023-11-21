function FindProxyForURL(url, host) {
    // Define websites that are always blocked
    var alwaysBlockedWebsites = [
        "youtube.com"
        // Add more websites to the list as needed
    ];

    // Define websites that are blocked at certain times
    var timeBlockedWebsites = [
        { host: "*google*", times: [{ start: 0, end: 1400 }, { start: 1800, end: 2400 }] }
        // Add more websites and time ranges to the list as needed
    ];

    // Get the current time in minutes since midnight
    var currentTime = new Date().getHours() * 60 + new Date().getMinutes();

    // Check if the requested host (website) is in the list of always blocked websites
    if (alwaysBlockedWebsites.some(function (blockedHost) {
        return host.toLowerCase().indexOf(blockedHost) !== -1;
    })) {
        return "PROXY block.proxy.server:8080";
    }

    // Check if the requested host (website) is in the list of time-blocked websites
    var timeBlockedWebsite = timeBlockedWebsites.find(function (item) {
        return item.host.toLowerCase() === host.toLowerCase();
    });

    if (timeBlockedWebsite) {
        // Check if the current time is within any of the specified time ranges
        for (var i = 0; i < timeBlockedWebsite.times.length; i++) {
            if (currentTime >= timeBlockedWebsite.times[i].start && currentTime <= timeBlockedWebsite.times[i].end) {
                return "PROXY block.proxy.server:8080";
            }
        }
    }

    // Allow all other connections
    return "DIRECT";
}
