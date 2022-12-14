import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');

const player = new Player(iframe);

const LOCALSTORAGE_KEY = 'videoplayer-current-time';

const getCurrentTime = localStorage.getItem(LOCALSTORAGE_KEY);

player.setCurrentTime(getCurrentTime);

function onPlay(event) {
  const currentTime = event.seconds;
  console.log(currentTime);

  if (LOCALSTORAGE_KEY) {
    localStorage.setCurrentTime;
    localStorage.setItem(LOCALSTORAGE_KEY, currentTime);
  }
}

player.on('timeupdate', throttle(onPlay, 1000));
