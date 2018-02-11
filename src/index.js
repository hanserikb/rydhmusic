require('./index.css');
require('./modernizr.js');

// Set day/night body class depending on time
var today = new Date().getHours();
document.body.classList.add((today >= 18 || today <= 7) ? 'night' : 'day');

// Audio controller
const play = document.querySelector('.play');
const pause = document.querySelector('.pause');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const circle = document.querySelector('.circle');
const sounds = [
  '/audio/webloop-1.mp3',
  '/audio/webloop-2.mp3',
  '/audio/webloop-3.mp3',
  '/audio/webloop-4.mp3',
];
let nowPlayingIndex = 0;
const myAudio = document.createElement('audio');
myAudio.loop = 'true';

setNext ();

play.addEventListener('click', () => {
  startSpinning();
  myAudio.play();
});

pause.addEventListener('click', () => {
  stopSpinning();
  setNext()
  myAudio.pause();
});

next.addEventListener('click', () => {
  setNext();
  myAudio.play();
});

prev.addEventListener('click', () => {
  setPrevious();
  myAudio.play();
});

function setNext() {
  if (nowPlayingIndex > sounds.length-1) {
    nowPlayingIndex = 0;
  }
  changeAudio(sounds[nowPlayingIndex]);
  nowPlayingIndex++;
}

function setPrevious() {
  if (nowPlayingIndex > 0) {
    nowPlayingIndex--
  }
  changeAudio(sounds[nowPlayingIndex]);
}

// Cycle the audio list and attach next to the player
function changeAudio(track) {
  myAudio.setAttribute('src', track);
}

function startSpinning() { circle.classList.add('spinning'); }
function stopSpinning() { circle.classList.remove('spinning'); }