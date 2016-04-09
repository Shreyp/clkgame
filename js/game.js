var toggleBtn = document.getElementById("toggleBtn");
var clickImages = document.getElementsByTagName("img");
var youScore = document.getElementById("#yourScore");
var reset = document.getElementById("resetBtn");
var statusBtn = document.getElementById("status");
var secondsRemaining = 20;
var timerDecrease;
var points = 0;

//Start Game
function startGame() {
  timerDecrease = setInterval(timerCountdown, 1000);
  for(var i = 0; i < clickImages.length; i++) {
    clickImages[i].addEventListener("click", countClicks)
  };
  toggleBtn.setAttribute("class","btn btn-secondary");
  resetBtn.setAttribute("disabled", "");
};

function resetGame(){
  location.reload();
}

resetBtn.addEventListener("click", resetGame);

toggleBtn.addEventListener("click", startGame);

//Timer Ticks
function timerCountdown(){
  if(secondsRemaining > 0){
    statusBtn.innerHTML = secondsRemaining-=1;
  } else {
    yourScore.innerHTML = points;
    $('#myModal').modal({
      backdrop:'static',
      keyboard:false
    });
    resetBtn.removeAttribute("disabled", "");
    clearInterval(timerDecrease);
    secondsRemaining = 20;
    points=0;
  }
}

//Count Points
function countClicks(){
  points +=1;
  this.src = "./images/x.png";
  this.removeEventListener("click", countClicks);
  console.log(points);
}
