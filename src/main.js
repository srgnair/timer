import './style.css';

let hours = 0;
let minutes = 0;
let seconds = 0;

const updateDisplay = () => {
  document.getElementById('hour').textContent = hours;
  document.getElementById('minute').textContent = String(minutes).padStart(
    2,
    '0'
  );
  document.getElementById('second').textContent = String(seconds).padStart(
    2,
    '0'
  );
};

// 増減ボタン

document.getElementById('hour-plus').addEventListener('click', () => {
  if (hours < 10) hours++;
  updateDisplay();
});

document.getElementById('hour-minus').addEventListener('click', () => {
  if (hours > 0) hours--;
  updateDisplay();
});

document.getElementById('minute-plus').addEventListener('click', () => {
  if (minutes < 59) minutes++;
  updateDisplay();
});

document.getElementById('minute-minus').addEventListener('click', () => {
  if (minutes > 0) minutes--;
  updateDisplay();
});

document.getElementById('second-plus').addEventListener('click', () => {
  if (seconds < 59) seconds++;
  updateDisplay();
});

document.getElementById('second-minus').addEventListener('click', () => {
  if (seconds > 0) seconds--;
  updateDisplay();
});

//はじめるボタン

let intervalId = null;

document.getElementById('start').addEventListener('click', () => {
  if (intervalId !== null) return;

  intervalId = setInterval(() => {
    if (hours === 0 && minutes === 0 && seconds === 0) {
      clearInterval(intervalId);
      intervalId = null;
      return;
    }

    if (seconds > 0) {
      seconds--;
    } else {
      if (minutes > 0) {
        minutes--;
        seconds = 59;
      } else if (hours > 0) {
        hours--;
        minutes = 59;
        seconds = 59;
      }
    }

    if (hours === 0 && minutes === 0 && seconds === 0) {
      clearInterval(intervalId);
      intervalId = null;
      alert('おわり！');
      return;
    }

    updateDisplay();
  }, 1000);
});

//とめるボタン

document.getElementById('stop').addEventListener('click', () => {
  clearInterval(intervalId);
  intervalId = null;
});

document.getElementById('reset').addEventListener('click', () => {
  clearInterval(intervalId);
  intervalId = null;

  hours = 0;
  minutes = 0;
  seconds = 0;

  updateDisplay();
});
