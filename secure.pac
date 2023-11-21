function FindProxyForURL(url, host) {
    // Define the time ranges during which websites are blocked
    var blockedWebsites = [
        "youtube.com",
        "facebook.com",
        "twitter.com"
        // Add more websites to the list as needed
    ];

    var blockedTimes = [
        { start: 0, end: 800 },   // Block from midnight to 8:00 AM
        { start: 1800, end: 2400 } // Block from 6:00 PM to midnight
    ];

    // Get the current time in minutes since midnight
    var currentTime = new Date().getHours() * 60 + new Date().getMinutes();

    // Check if the requested host (website) is in the blocked list
    if (blockedWebsites.indexOf(host.toLowerCase()) !== -1) {
        // Check if the current time is within any of the blocked time ranges
        for (var i = 0; i < blockedTimes.length; i++) {
            if (currentTime >= blockedTimes[i].start && currentTime <= blockedTimes[i].end) {
                // Block the connection to the specified website during the specified time range
                return "PROXY block.proxy.server:8080";
            }
        }
    }

    // Allow all other connections
    return "DIRECT";
}
