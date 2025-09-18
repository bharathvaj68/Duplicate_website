

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
