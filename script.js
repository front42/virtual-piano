document.querySelector('.fullscreen').addEventListener('click', toggleFullscreen);

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else if (document.exitFullscreen) {
    document.exitFullscreen();
  }
}

document.addEventListener('keydown', (event) => {
  if (event.code === 'F11') {
    event.preventDefault();
    toggleFullscreen();
  }
});
