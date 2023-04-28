import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

const localStorageKey = 'feedback-form-state';

//функція "saveState" зберігає поточний стан форми в локальному сховищі
//Функція "throttle" допомагає затримати виконання цієї функції на 500 мілісекунд, щоб запобігти збільшенню навантаження на браузер
const saveState = throttle(() => {
    const state = {
        email: emailInput.value,
        message: messageInput.value,
    };
    localStorage.setItem(localStorageKey, JSON.stringify(state));
}, 500);

//Функція "loadState" викликається для завантаження збереженого стану форми з локального сховища, якщо такий стан було збережено раніше. Збережений стан відновлюється в полях введення форми.
const loadState = () => {
    const stateJSON = localStorage.getItem(localStorageKey);
    if (stateJSON) {
        const state = JSON.parse(stateJSON);
        emailInput.value = state.email;
        messageInput.value = state.message;
    }
};

//Функція "clearState" видаляє збережений стан форми з локального сховища та очищає поля введення форми
const clearState = () => {
    localStorage.removeItem(localStorageKey);
    emailInput.value = '';
    messageInput.value = '';
    console.log({
        email: emailInput.value,
        message: messageInput.value,
    });
};

form.addEventListener('input', saveState); //Обробник події "input" викликає функцію "saveState" при кожному введенні користувача, а обробник події "submit" викликає функцію "clearState" для видалення збереженого стану форми та очищення її полів введення.
form.addEventListener('submit', event => {
    event.preventDefault();
    clearState();
});

loadState();
