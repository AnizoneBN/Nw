document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById('background-video');
    const toggleSoundButton = document.getElementById('toggle-sound');

    toggleSoundButton.addEventListener('click', function() {
        if (video.muted) {
            video.muted = false;
            toggleSoundButton.textContent = "Mute Sound";
        } else {
            video.muted = true;
            toggleSoundButton.textContent = "Unmute Sound";
        }
    });
});