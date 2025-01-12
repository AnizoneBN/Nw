document.getElementById('notify-btn').addEventListener('click', function() {
    // Check if the browser supports notifications
    if ('Notification' in window) {
        // Request permission from the user
        Notification.requestPermission().then(function(permission) {
            if (permission === 'granted') {
                // Register the service worker
                navigator.serviceWorker.register('/Every/EveryNo.js').then(function(registration) {
                    console.log('Service Worker registered with scope:', registration.scope);
                }).catch(function(error) {
                    console.error('Service Worker registration failed:', error);
                });
            } else {
                alert('Notifications are disabled.');
            }
        });
    } else {
        alert('This browser does not support notifications.');
    }
});