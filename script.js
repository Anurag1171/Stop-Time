var startTime;
var stopwatchInterval;
var elapsedPausedTime = 0;

function startStopwatch() {
  if (!stopwatchInterval) {
    startTime = new Date().getTime() - elapsedPausedTime;
    stopwatchInterval = setInterval(updateStopwatch, 1000);
  }
}

function stopStopwatch() {
  clearInterval(stopwatchInterval);
  elapsedPausedTime = new Date().getTime() - startTime;
  stopwatchInterval = null;
}

function resetStopwatch() {
  stopStopwatch();
  elapsedPausedTime = 0;
  document.getElementById("stopwatch").innerHTML = "00:00:00";
  resetClock();
}

function updateStopwatch() {
  var currentTime = new Date().getTime();
  var elapsedTime = currentTime - startTime;
  var seconds = Math.floor(elapsedTime / 1000) % 60;
  var minutes = Math.floor(elapsedTime / 1000 / 60) % 60;
  var hours = Math.floor(elapsedTime / 1000 / 60 / 60);
  var displayTime = pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
  document.getElementById("stopwatch").innerHTML = displayTime;
  updateClock(hours, minutes, seconds);
}

function pad(number) {
  return (number < 10 ? "0" : "") + number;
}

function updateClock(hours, minutes, seconds) {
  var secondHand = document.querySelector(".second-hand");
  var minuteHand = document.querySelector(".minute-hand");
  var hourHand = document.querySelector(".hour-hand");

  secondHand.setAttribute("transform", `rotate(${seconds * 6} 50 50)`);
  minuteHand.setAttribute(
    "transform",
    `rotate(${minutes * 6 + seconds / 10} 50 50)`
  );
  hourHand.setAttribute(
    "transform",
    `rotate(${hours * 30 + minutes / 2} 50 50)`
  );
}

function resetClock() {
  var secondHand = document.querySelector(".second-hand");
  var minuteHand = document.querySelector(".minute-hand");
  var hourHand = document.querySelector(".hour-hand");

  secondHand.setAttribute("transform", `rotate(0 50 50)`);
  minuteHand.setAttribute("transform", `rotate(0 50 50)`);
  hourHand.setAttribute("transform", `rotate(0 50 50)`);
}
