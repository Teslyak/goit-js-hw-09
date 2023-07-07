const refs = {
    body: document.querySelector('body'),
    start: document.querySelector('button[data-start]'),
    stop: document.querySelector('button[data-stop]')
}
let timerId = null;

refs.start.addEventListener('click', onStartClick);
refs.stop.addEventListener('click', onStopClick)

function onStartClick() {
    timerId = setInterval(() => {
        refs.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    refs.start.setAttribute('disabled', 'disabled') ;
};

function onStopClick() {
    clearInterval(timerId);
    refs.start.removeAttribute('disabled');
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
