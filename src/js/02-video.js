//підключимо бібліотеку
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe); //конструктор класу Player з бібліотеки Vimeo, який створює новий плеєр з переданим елементом iframe.

const onPlay = function (data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
};
//на події 'timeupdate' плеєра, функція onPlay зберігає поточний час відтворення в локальному сховищі браузера з допомогою методу localStorage.setItem
player.on('timeupdate', throttle(onPlay, 1000));
//код отримує збережений час відтворення з локального сховища браузера за допомогою методу localStorage.getItem
const currentTime = Number(localStorage.getItem('videoplayer-current-time'));

//За допомогою методу player.setCurrentTime час відтворення плеєра встановлюється на збережене значення.
player.setCurrentTime(currentTime).then(function (seconds) {
    
}).catch(function (error) {
  switch (error.name) {
    case 'RangeError':
      break;
      default:
      break;
    }
}); //У разі виникнення помилки RangeError, код обробляє її відповідним чином.