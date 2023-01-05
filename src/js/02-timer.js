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

const btnStartEl = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

// const timePickerEl = document.addEventListener('#datetime-picker');
const options = {
  enableTime: true,
  time_24hr: true,
  enableSeconds: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      btnStartEl.disabled = true;
      alert('Please choose a date in the future');
    } else {
      btnStartEl.disabled = false;
      btnStartEl.addEventListener('click', () => {
        intId = setInterval(() => {
          const time = selectedDates[0] - new Date();
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
  daysEl.textContent = event.days;
  hoursEl.textContent = event.hours;
  minutesEl.textContent = event.minutes;
  secondsEl.textContent = event.seconds;
}
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
