// Predefined array of messages
const messages = [
    "Check out our latest deals!",
    "Don't miss out on today's special offer!",
    "New products just added - check them out!",
    "Exciting news! Stay tuned for updates.",
    "Thank you for being a valued customer!"
];

self.addEventListener('push', function(event) {
    const options = {
        body: event.data ? event.data.text() : 'Push message with no payload',
        icon: '/Img/images.png',
        badge: '/Img/Picsart_24-06-04_17-32-42-752.png'
    };

    event.waitUntil(
        self.registration.showNotification('Push Notification', options)
    );
});

// Schedule initial notification and then every 30 minutes
self.addEventListener('install', function(event) {
    self.skipWaiting();
});

self.addEventListener('activate', function() {
    // Schedule first notification immediately
    self.registration.showNotification('Hello!', {
        body: 'Thank you for enabling notifications!',
        icon: '/Img/images.png',
        badge: '/Img/Picsart_24-06-04_17-32-42-752.png'
    });

    // Schedule subsequent notifications every 30 minutes
    setInterval(function() {
        const randomIndex = Math.floor(Math.random() * messages.length);
        const randomMessage = messages[randomIndex];

        self.registration.showNotification('Never Give up!', {
            body: randomMessage,
            icon: '/Img/images.png',
            badge: '/Img/Picsart_24-06-04_17-32-42-752.png'
        });
    }, 30 * 60 * 1000); // 30 minutes in milliseconds
});