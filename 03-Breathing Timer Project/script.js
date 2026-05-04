let timeLeft;
let timerInterval;
let isRunning = false;

const start = document.getElementById("start");
const stop = document.getElementById("stop");
const displayTimer = document.getElementById("timer");

function updateTimer(duration) {
  let timer = duration;
  timerInterval = setInterval(() => {
    const minuits = parseInt(timer / 60, 10);
    const seconds = parseInt(timer % 60, 10);
    const displayminuits = minuits < 10 ? "0" + minuits : minuits;
    const displaysecods = seconds < 10 ? "0" + seconds : seconds;
    displayTimer.textContent = displayminuits + ":" + displaysecods;

    if (--timer < 0) {
      clearInterval(timerInterval);
      displayTimer.textContent = "breath Out";
      setTimeout(() => {
        displayTimer.textContent = "Breath In";
        updateTimer(timeLeft);
      }, 3000);
    }
  }, 1000);
}
const stopTimer = () => {
  clearInterval(timerInterval);
  displayTimer.textContent = "Breath In";
  isRunning = false;
};
start.addEventListener("click", () => {
  if (!isRunning) {
    timeLeft = 10;
    updateTimer(timeLeft);
    isRunning = true;
  }
});

stop.addEventListener("click", () => {
  stopTimer();
  isRunning = false;
});
