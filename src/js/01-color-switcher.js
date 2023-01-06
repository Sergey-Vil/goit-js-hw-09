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
const refs = {
  bodyEl: document.querySelector('body'),
  startBtnEl: document.querySelector('[data-start]'),
  stopBtnEl: document.querySelector('[data-stop]'),
};

refs.startBtnEl.addEventListener('click', onStartBtnElClick);
refs.stopBtnEl.addEventListener('click', onStopBtnClick);
let timeId = null;

refs.stopBtnEl.disabled = true;

function onStartBtnElClick() {
  timeId = setInterval(() => {
    refs.bodyEl.style.background = getRandomHexColor();
  }, 1000);
  refs.startBtnEl.disabled = true;
  refs.stopBtnEl.disabled = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onStopBtnClick() {
  clearTimeout(timeId);
  timeId = null;
  refs.startBtnEl.disabled = false;
  refs.stopBtnEl.disabled = true;
}
