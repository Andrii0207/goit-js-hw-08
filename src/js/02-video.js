import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('handstick', {
  id: 19231868,
  width: 640,
});

const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo.Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

// player.getVideoTitle().then(function (title) {
//   console.log('title:', title);
// });
