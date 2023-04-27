//підключимо бібліотеку
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe); //конструктор класу Player з бібліотеки Vimeo, який створює новий плеєр з переданим елементом iframe.

//відстеження події timeupdate, яка виникає при оновленні часу відтворення. Можна зробити це, скориставшись методом on():
player.on('timeupdate', throttle(() => {
  // зберігаємо поточний час відтворення в локальне сховище
    localStorage.setItem('videoplayer-current-time', player.getCurrentTime());
}, 1000));
//Функція getCurrentTime() повертає поточний час відтворення у секундах

//відновлювати відтворення з збереженої позиції під час перезавантаження сторінки робимо методом setCurrentTime():
const savedTime = localStorage.getItem('videoplayer-current-time');

if (savedTime) {
    player.setCurrentTime(savedTime);
}

//спочатку зчитує час відтворення з локального сховища, а потім встановлює його за допомогою методу setCurrentTime().