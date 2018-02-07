require('./index.css');
require('./modernizr.js');


(() => {
  var today = new Date().getHours();
  if (today >= 18 || today <= 7) {
    document.body.classList.add('night');
  } else {
    document.body.classList.add('day');
  }
})();

(() => {
  const play = document.querySelector('.play');
  const pause = document.querySelector('.pause');
  const circle = document.querySelector('.circle');
  const sounds = [
    '/audio/webloop4_tape.m4a',
    '/audio/webloop1.m4a',
    '/audio/webloop2.m4a',
  ];
  let nowPlayingIndex = 0;
  var myAudio = document.createElement('audio');
  myAudio.loop = 'true';

  changeSound();

  play.addEventListener('click', () => {
    startSpinning();
    myAudio.play();
  });

  pause.addEventListener('click', () => {
    stopSpinning();
    changeSound();
    myAudio.pause();
  });

  function changeSound() {
    if (nowPlayingIndex > sounds.length-1) {
      nowPlayingIndex = 0;
    }
    myAudio.setAttribute('src', sounds[nowPlayingIndex]);
    nowPlayingIndex = nowPlayingIndex + 1;
  }
  function startSpinning() {
    circle.classList.add('spinning');
  }
  function stopSpinning() {
    circle.classList.remove('spinning');
  }

})();