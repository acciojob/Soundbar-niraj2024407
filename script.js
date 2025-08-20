//your JS code here. If required.
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

let currentAudio = null;

document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', () => {
    stopAudio();
    const soundName = btn.innerText;
    currentAudio = new Audio(`sounds/${soundName}.mp3`);
    currentAudio.play();
  });
});

document.querySelector('.stop').addEventListener('click', () => {
  stopAudio();
});

function stopAudio() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  }
}
