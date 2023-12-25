let timer;
let isTimerRunning = false;
let timerValue = 25 * 60; 

function updateTimerDisplay() {
  const minutes = Math.floor(timerValue / 60);
  const seconds = timerValue % 60;
  const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  document.getElementById('timer').innerText = formattedTime;
}

function startPauseTimer() {
  const startButton = document.getElementById('startButton');

  if (!isTimerRunning) {
    startButton.innerHTML = 'Pause';
    startButton.style.backgroundColor = 'rgb(220, 144, 4)';
    startButton.style.color = 'rgb(253, 211, 106)';
    isTimerRunning = true;
    timer = setInterval(() => {
      if (timerValue > 0) {
        timerValue--;
        updateTimerDisplay();
      } else {
        clearInterval(timer);
        isTimerRunning = false;
        startButton.innerHTML = 'Start';
        startButton.style.backgroundColor = 'rgb(9, 108, 29)';
        startButton.style.color = 'rgb(70, 182, 29)';
        if (timerValue === 0) {
          startBreak();
        }
      }
    }, 1000);
  } else {
    clearInterval(timer);
    isTimerRunning = false;
    startButton.innerHTML = 'Start';
    startButton.style.backgroundColor = 'rgb(9, 108, 29)';
    startButton.style.color = 'rgb(70, 182, 29)';
  }
}

function startBreak() {
  timerValue = 5 * 60;
  updateTimerDisplay();
  setTimeout(() => {
    resetTimer();
  }, timerValue * 1000);
}

function resetTimer() {
  clearInterval(timer);
  isTimerRunning = false;
  timerValue = 25 * 60; 
  updateTimerDisplay();
  document.getElementById('startButton').innerHTML = 'Start';
  document.getElementById('startButton').style.backgroundColor = 'rgb(9, 108, 29)';
  document.getElementById('startButton').style.color = 'rgb(70, 182, 29)';
}
