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


import Chart from 'chart.js/auto';

const chartData = {
  labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"],
  datasets: [
    {
      label: "Продажі за останній місяць",
      data: [150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350],
      backgroundColor: "#2196f3",
      borderColor: "#2196f3",
      borderWidth: 1,
    },
  ],
};


const salesChartCanvas = document.querySelector("#sales-chart");
const salesChart = new Chart(salesChartCanvas, {
    type: "line",
    data: chartData,
    options:{
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});