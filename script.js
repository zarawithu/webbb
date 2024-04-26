const audioPlayer = document.getElementById('audio-player');

audioPlayer.onplay = function() {
    console.log('Audio is playing');
};

audioPlayer.onpause = function() {
    console.log('Audio is paused');
};

audioPlayer.onended = function() {
    console.log('Audio has ended');
};
