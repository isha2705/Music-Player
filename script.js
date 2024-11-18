// script.js
function loadYouTubeAudio() {
    const link = document.getElementById('youtube-link').value.trim();
    const videoId = extractYouTubeId(link);
  
    if (!videoId) {
      alert('Invalid YouTube URL!');
      return;
    }
  
    const iframe = `<iframe 
                      src="https://www.youtube.com/embed/${videoId}?autoplay=1" 
                      allow="autoplay">
                    </iframe>`;
    document.getElementById('audio-player').innerHTML = iframe;
  }
  
  function extractYouTubeId(url) {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  }
  