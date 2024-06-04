self.addEventListener('push', function(event) {
    const options = {
        body: event.data ? event.data.text() : 'Push message with no payload',
        icon: '/images (2).png',
        badge: '/Img/Picsart_24-06-04_17-32-42-752.png'
    };

    event.waitUntil(
        self.registration.showNotification('Push Notification', options)
    );
});