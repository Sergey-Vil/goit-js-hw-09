// HTML містить кнопки «Start» і «Stop».

// <button type="button" data-start>Start</button>
// <button type="button" data-stop>Stop</button>

// Напиши скрипт, який після натискання кнопки «Start»,
// раз на секунду змінює колір фону <body> на випадкове
//  значення, використовуючи інлайн стиль. Натисканням на
//  кнопку «Stop» зміна кольору фону повинна зупинятися.

// УВАГА
// Враховуй, що на кнопку «Start» можна натиснути
// нескінченну кількість разів. Зроби так, щоб доки
// зміна теми запущена, кнопка «Start» була неактивною
//  (disabled).
const bodyEl = document.querySelector('body');
const startBtnEl = document.querySelector('[data-start]');
const stopBtnEl = document.querySelector('[data-stop]');

// bodyEl.addEventListener('click', onStartBtnElClick);
startBtnEl.addEventListener('click', onStartBtnElClick);
stopBtnEl.addEventListener('click', onStopBtnClick);
let timeId = null;
// const timeId = null;
stopBtnEl.disabled = true;
function onStartBtnElClick() {
  timeId = setInterval(() => {
    bodyEl.style.background = getRandomHexColor();
  }, 1000);
  startBtnEl.disabled = true;
  stopBtnEl.disabled = false;
  console.log(timeId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onStopBtnClick() {
  clearTimeout(timeId);
  timeId = null;
  startBtnEl.disabled = false;
  stopBtnEl.disabled = true;
}
