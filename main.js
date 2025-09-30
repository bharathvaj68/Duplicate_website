document.querySelectorAll(".device-screen").forEach(screen => {
  const video = screen.querySelector("video");
  const playPauseBtn = screen.querySelector(".play-pause");
  const muteUnmuteBtn = screen.querySelector(".mute-unmute");


  playPauseBtn.addEventListener("click", () => {
    if (video.paused) {
      video.play();
      playPauseBtn.textContent = "⏸";
    } else {
      video.pause();
      playPauseBtn.textContent = "▶";
    }
  });

  muteUnmuteBtn.addEventListener("click", () => {
    video.muted = !video.muted;
    muteUnmuteBtn.textContent = video.muted ? "🔇" : "🔊";
  });
});


// video overlay for laptop

const laptopContainer = document.querySelector('.laptop-container');
const videoOverlay = document.getElementById('videoOverlay');
const overlayVideo = document.getElementById('overlayVideo');
const overlayContent = document.getElementById('overlayContent');
const closeOverlay = document.getElementById('closeOverlay');

laptopContainer.addEventListener('click', (e) => {
  videoOverlay.classList.add('active');
  overlayVideo.currentTime = 0;
  overlayVideo.play();
});

videoOverlay.addEventListener('click', (e) => {
  if (e.target === videoOverlay) {
    videoOverlay.classList.remove('active');
    overlayVideo.pause();
  }
});

closeOverlay.addEventListener('click', () => {
  videoOverlay.classList.remove('active');
  overlayVideo.pause();
});

overlayContent.addEventListener('click', (e) => {
  e.stopPropagation();
});

