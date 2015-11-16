var timerDecrease;
var points = 0;
var toggleBtn = document.getElementById("toggleBtn");
var secondsRemaining = 20;
var clickImages = document.getElementsByTagName("img");

//Function to Start Timer
  function startGame() {
    timerDecrease = setInterval(timerCountdown, 1000);
    };

toggleBtn.addEventListener("click", startGame);

//Function to Countdown
function timerCountdown(){
  if(secondsRemaining > 0){
    document.getElementById("status").innerHTML = secondsRemaining-=1;
  } else {
    alert("times up your score is " + points)
    clearInterval(timerDecrease);
  }
}

//Function to count dem points
  function countClicks(){
    points +=1;
}

//Loop to add clicks to images
for(var i = 0; i < clickImages.length; i++) {
  clickImages[i].addEventListener("click", countClicks)}