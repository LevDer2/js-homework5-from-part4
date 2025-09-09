import { alert, defaultModules, success, error, notice} from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import * as PNotifyMobile from '@pnotify/mobile';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";

defaultModules.set(PNotifyMobile, {});

const keys = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]; // масив букв
let currentKeyIndex = 0; // Счетчик на якії я індекса букви знаходжусь

const letter = document.querySelector("#letter"); // Підключаємо к h1 
const newGame = document.querySelector(".new-game")

function update() { // функція яка буде обновлювати  бкуву
    letter.textContent = `"${keys[currentKeyIndex]}"`; // Буде вводитися яке на екрані яка зараз буква
}
update(); // Запускаємо

document.addEventListener("keydown", (event) => { // робимо функцію щоб там можно було вводити букви
    const pressed = event.key.toLowerCase(); // всі літери які ми вводимо будуть з маленької
    const expected = keys[currentKeyIndex]; // очікує нашу букву яка зараз

    if (pressed === expected) { // Перевірка
         success(
            {
                title: 'Success!',
                text: 'Ти правильно написав!',
                delay: 500
            }
        );
        currentKeyIndex = (currentKeyIndex + 1) % keys.length; // Якщо буде кінець масиву то воно почне заново з a
        update(); // Якщо все вірно то запускаємо ще раз функцію 
    }
    else {
        error(
            {
                title: 'Oh No!',
                text: 'Напиши правильно',
                delay: 700
});
    }
});

newGame.addEventListener("click", function() {
    currentKeyIndex = 0;
    notice({
  title: 'Regular Notice',
  text: 'Тепер все заново!'
});
update();
})