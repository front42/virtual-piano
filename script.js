document.addEventListener('click', (event) => {
  if (event.target.closest('.btn')) {
    switchNotesLetters(event);
  } else if (event.target.closest('.fullscreen')) {
    toggleFullscreen();
  }
});

document.addEventListener('mousedown', (event) => {
  if (event.target.closest('.piano-key')) {
    document.addEventListener('mouseover', playAudio);
    playAudio(event);
  }
});

document.addEventListener('mouseout', (event) => {
  event.target.classList.remove('piano-key-active');
});

document.addEventListener('mouseup', (event) => {
  event.target.classList.remove('piano-key-active');
  document.removeEventListener('mouseover', playAudio);
});

document.addEventListener('keydown', (event) => {
  if (event.repeat) return;
  if (document.querySelector(`[data-letter="${event.code.slice(3)}"]`)) {
    playAudio(event);
  } else if (event.code === 'F11') {
    event.preventDefault();
    toggleFullscreen();
  }
});

document.addEventListener('keyup', (event) => {
  const key = document.querySelector(`[data-letter="${event.code.slice(3)}"]`);
  if (!key) return;
  key.classList.remove('piano-key-active');
});

const btns = document.querySelectorAll('.btn');
const pianoKeys = document.querySelectorAll('.piano-key');

const switchNotesLetters = (event) => {
  const targetBtn = event.target.closest('.btn');
  btns.forEach((btn) => btn.classList.remove('btn-active'));
  targetBtn.classList.add('btn-active');
  if (targetBtn.classList.contains('btn-letters')) {
    pianoKeys.forEach((key) => key.classList.add('piano-key-letter'));
  } else {
    pianoKeys.forEach((key) => key.classList.remove('piano-key-letter'));
  }
};

const toggleFullscreen = () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else if (document.exitFullscreen) {
    document.exitFullscreen();
  }
};

const playAudio = (event) => {
  const key = event.code
    ? document.querySelector(`[data-letter="${event.code.slice(3)}"]`)
    : event.target.closest('.piano-key');
  if (!key || key.classList.contains('piano-key-active')) return;
  key.classList.add('piano-key-active');

  const note = key.dataset.note;
  const src = `./assets/audio/${note}.mp3`;
  const audio = new Audio(src);
  audio.currentTime = 0;
  audio.play();
};
