import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframeEl = document.querySelector('iframe');
const player = new Player(iframeEl);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

const onPlay = function (data) {
  localStorage.setItem(LOCALSTORAGE_KEY, data.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

const savedData = localStorage.getItem(LOCALSTORAGE_KEY);

player.setCurrentTime(savedData);
