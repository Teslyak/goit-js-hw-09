import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

let totalTimes = null;
let timeId = null;

const refs = {
    start: document.querySelector('button[data-start]'),
    days: document.querySelector('.value[data-days]'),
    hours: document.querySelector('.value[data-hours]'),
    minutes: document.querySelector('.value[data-minutes]'),
    seconds: document.querySelector('.value[data-seconds]'),
    input: document.querySelector('#datetime-picker'),
    body: document.querySelector('body'),
    div: document.querySelector('.timer')
};

let makeButtonStop = document.createElement("button")
refs.body.insertBefore(makeButtonStop, refs.div);
makeButtonStop.setAttribute("type", "button");
makeButtonStop.textContent = "Reset";
makeButtonStop.setAttribute('data-stop', "");
makeButtonStop.addEventListener('click', onResetClick);

refs.start.setAttribute('disabled', 'disabled');
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] < options.defaultDate) {
            Notiflix.Notify.failure('Please choose a date in the future');
            return;
        } else {
            refs.start.removeAttribute('disabled');  
            totalTimes = selectedDates[0] - options.defaultDate;
            refs.start.addEventListener('click',onStartClick)
      } 
  }
};

flatpickr("input#datetime-picker", options);

function onStartClick() {
    timeId = setInterval(updateTime, 1000); 
    refs.input.setAttribute('disabled', 'disabled');
    refs.start.setAttribute('disabled', 'disabled');
    
};

function onResetClick() {
    clearInterval(timeId);
    refs.input.removeAttribute('disabled');
    refs.days.textContent = "00";
    refs.hours.textContent = "00";
    refs.minutes.textContent = "00";
    refs.seconds.textContent = "00";
};
  
function updateTime() {
    const resultTime = convertMs(totalTimes);
    const timeFormating = addLeadingZero(resultTime);
            refs.days.textContent = timeFormating.days;
            refs.hours.textContent = timeFormating.hours;
            refs.minutes.textContent = timeFormating.minutes;
            refs.seconds.textContent = timeFormating.seconds;
    totalTimes -= 1000;
    if (totalTimes <= 0) {
        stopWath(); 
    };
};

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
    
};
function addLeadingZero(value) {
    let { days, hours, minutes, seconds } = value;
    if (days < 10 || hours < 10 || minutes < 10 || seconds < 10) {
        days = days.toString().padStart(2, "0");
        hours = hours.toString().padStart(2, "0");
        minutes = minutes.toString().padStart(2, "0");
        seconds = seconds.toString().padStart(2, "0");
    }
    return { days, hours, minutes, seconds };
};
function stopWath() {
    clearInterval(timeId);
    refs.input.removeAttribute('disabled');
    
};