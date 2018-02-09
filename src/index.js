require('./index.css');
require('./modernizr.js');

// Set day/night body class depending on time
var today = new Date().getHours();
document.body.classList.add((today >= 18 || today <= 7) ? 'night' : 'day');

// Audio controller
const play = document.querySelector('.play');
const pause = document.querySelector('.pause');
const circle = document.querySelector('.circle');
const sounds = [
  '/audio/webloop4_tape.m4a',
  '/audio/webloop2.m4a',
  '/audio/webloop3.m4a',
  '/audio/webloop4.m4a',
];
let nowPlayingIndex = 0;
const myAudio = document.createElement('audio');
myAudio.loop = 'true';

changeAudio();

play.addEventListener('click', () => {
  startSpinning();
  myAudio.play();
});

pause.addEventListener('click', () => {
  stopSpinning();
  changeAudio();
  myAudio.pause();
});

// Cycle the audio list and attach next to the player
function changeAudio() {
  if (nowPlayingIndex > sounds.length-1) {
    nowPlayingIndex = 0;
  }
  myAudio.setAttribute('src', sounds[nowPlayingIndex]);
  nowPlayingIndex++;
}

function startSpinning() { circle.classList.add('spinning'); }
function stopSpinning() { circle.classList.remove('spinning'); }