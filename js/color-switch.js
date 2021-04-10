const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]'),
    body: document.querySelector('body'),
};

let intervalId = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const changeBodyBkgColor = () => {
    const randomColor = randomIntegerFromInterval(0, colors.length - 1);
    refs.body.style.background = colors[randomColor];
}

const onBtnStartClick = () => {
    intervalId = setInterval(changeBodyBkgColor, 1000);
    refs.startBtn.disabled = true;
}

const onBtnStopClick = () => {
    clearInterval(intervalId);
    refs.startBtn.disabled = false;
}

refs.startBtn.addEventListener('click', onBtnStartClick);
refs.stopBtn.addEventListener('click', onBtnStopClick);




