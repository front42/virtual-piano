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

const btnContainer = document.querySelector('.btn-container');
const btns = document.querySelectorAll('.btn');
const piano = document.querySelector('.piano');
const pianoKeys = piano.querySelectorAll('.piano-key');

btnContainer.addEventListener('click', (event) => {
  const targetBtn = event.target.closest('.btn');
  if (!targetBtn) return;
  btns.forEach((btn) => btn.classList.remove('btn-active'));
  targetBtn.classList.add('btn-active');
  if (targetBtn.classList.contains('btn-letters')) {
    pianoKeys.forEach((key) => key.classList.add('piano-key-letter'));
  } else {
    pianoKeys.forEach((key) => key.classList.remove('piano-key-letter'));
  }
});
