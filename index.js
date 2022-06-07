var originalImg = document.getElementById("example-img");

function changeImg() {
  var newImg = new Image();
  newImg.src = "screenshot/component.png";

  originalImg.src = newImg.src;
}

function startTimer() {
  timerID = setTimeout(changeImg, 2000);
}

originalImg.addEventListener("click", startTimer);

var clock = document.querySelector(".clock-text");

function askTime() {
  var date = new Date();
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  clock.innerText = `${hour < 10 ? `0${hour}` : hour}:${
    min < 10 ? `0${min}` : min
  }:${sec < 10 ? `0${sec}` : sec}`;
}

function init() {
  askTime();
  setInterval(askTime, 1000);
}

init();
