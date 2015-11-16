// Click Game Start
var points = 0;
var imageElements = document.getElementsByTagName("img");
var secondsCount = 0;
var timerInterval;
var toggleBtn = document.getElementById("toggleBtn");

function startGame() {
  setTimeout(function() {
    if(secondsCount === 0) {
    clearInterval(timerInterval);
    alert("Your score is " + points);
  }
}, 2000);
    for(var i = 0; i < imageElements.length; i++) {
    imageElements[i].addEventListener("click", function() {
    points +=1
    console.log(points)})
}
}



toggleBtn.addEventListener("click", startGame);