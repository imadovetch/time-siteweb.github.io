const hoursLabel = document.getElementById('hours');
const minutesLabel = document.getElementById('minutes');
const secondsLabel = document.getElementById('seconds');
let totalSeconds = 0;
let interval;

function startChronometer() {
  interval = setInterval(setTime, 1000);
}

function pauseChronometer() {
  clearInterval(interval);
}

function resetChronometer() {
  location.reload();
}

function saveTime() {
  const currentTime = hoursLabel.textContent + ":" + minutesLabel.textContent + ":" + secondsLabel.textContent;
  document.getElementById("saver").textContent = currentTime;
}

function setTime() {
  ++totalSeconds;
  secondsLabel.textContent = padZero(totalSeconds % 60);
  minutesLabel.textContent = padZero(parseInt(totalSeconds / 60));
  hoursLabel.textContent = padZero(parseInt(totalSeconds / 3600));
}

function padZero(value) {
  const stringValue = value.toString();
  return stringValue.padStart(2, '0');
}

const startButton = document.getElementById('start');
const continueButton = document.getElementById('continue');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');
const saveButton = document.getElementById("save");

startButton.addEventListener('click', function() {
  startChronometer();
  startButton.style.display = 'none';
  saveButton.style.display = 'inline-block';
  pauseButton.style.display = 'inline-block';
  resetButton.style.display = 'inline-block';
});

continueButton.addEventListener('click', function() {
  startChronometer();
  continueButton.style.display = 'none';
  pauseButton.style.display = 'inline-block';
});

pauseButton.addEventListener('click', function() {
  pauseChronometer();
  pauseButton.style.display = 'none';
  continueButton.style.display = 'inline-block';
});

resetButton.addEventListener('click', function() {
  resetChronometer();
  startButton.style.display = 'inline-block';
  continueButton.style.display = 'none';
  pauseButton.style.display = 'none';
  resetButton.style.display = 'none';
});

saveButton.addEventListener('click', function() {
  saveTime();
});
