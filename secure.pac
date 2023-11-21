function FindProxyForURL(url, host) {
    // Define websites that are always blocked
    var alwaysBlockedWebsites = [
        "youtube.com"
        // Add more websites to the list as needed
    ];

    // Define websites that are blocked during a specific time range (6 PM to 8 AM)
    var timeBlockedWebsites = [
        "facebook.com"
    ];

    // Get the current time in minutes since midnight
    var currentTime = new Date().getHours() * 60 + new Date().getMinutes();

    // Check if the requested host (website) is in the list of always blocked websites
    if (alwaysBlockedWebsites.some(function (blockedHost) {
        return host.toLowerCase().endsWith(blockedHost);
    })) {
        return "PROXY block.proxy.server:8080";
    }

    // Check if the requested host (website) is in the list of time-blocked websites
    if (timeBlockedWebsites.some(function (blockedHost) {
        return host.toLowerCase().endsWith(blockedHost);
    })) {
        // Check if the current time is within the specified time range (6 PM to 8 AM)
        if (currentTime >= 1400 || currentTime <= 800) {
            // Block the connection to the specified website during the specified time range
            return "PROXY block.proxy.server:8080";
        }
    }

    // Allow all other connections
    return "DIRECT";
}
