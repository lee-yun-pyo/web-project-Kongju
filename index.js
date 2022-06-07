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
