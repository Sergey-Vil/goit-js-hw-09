// Напиши скрипт таймера, який здійснює зворотний відлік до
// певної дати. Такий таймер може використовуватися у блогах
// та інтернет-магазинах, сторінках реєстрації подій, під час
// технічного обслуговування тощо.
// Напиши скрипт таймера, який здійснює зворотний відлік до певної
// дати. Такий таймер може використовуватися у блогах та
// інтернет-магазинах, сторінках реєстрації подій, під час
// технічного обслуговування тощо.
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
  btnStartEl: document.querySelector('[data-start]'),
  daysEl: document.querySelector('[data-days]'),
  hoursEl: document.querySelector('[data-hours]'),
  minutesEl: document.querySelector('[data-minutes]'),
  secondsEl: document.querySelector('[data-seconds]'),
  timerEl: document.querySelector('.timer'),
  fieldEl: document.querySelectorAll('.field'),
};

refs.timerEl.style.display = 'flex';
refs.timerEl.style.gap = '15px';

refs.fieldEl.forEach(el => {
  el.style.display = 'flex';
  el.style.flexDirection = 'column';
  el.style.alignItems = 'center';
});

refs.btnStartEl.disabled = true;

let intId = null;
const options = {
  enableTime: true,
  time_24hr: true,
  enableSeconds: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      refs.btnStartEl.disabled = true;
      Notiflix.Report.warning(
        '',
        'Please choose a date in the future',
        'Okay',
        {
          width: '360px',
          svgSize: '120px',
        }
      );
    } else {
      refs.btnStartEl.disabled = false;

      refs.btnStartEl.addEventListener('click', () => {
        if (intId) {
          clearInterval(intId);
        }
        intId = setInterval(() => {
          const time = selectedDates[0] - new Date();
          console.log(time);

          if (time < 0) {
            clearInterval(intId);
          }

          const currentTime = convertMs(time);
          onShouTime(currentTime);
        }, 1000);
      });
    }
  },
};

const fp = flatpickr('#datetime-picker', options);

function onShouTime(event) {
  refs.daysEl.textContent = event.days;
  refs.hoursEl.textContent = event.hours;
  refs.minutesEl.textContent = event.minutes;
  refs.secondsEl.textContent = event.seconds;
}
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
