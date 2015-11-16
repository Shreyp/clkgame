// Click Game Start
var secondsCount = 0;
var timerInterval;

setTimeout(function() {
    if(secondsCount === 0) {
        clearInterval(timerInterval);
        buttonn.parentNode.removeChild(buttonn);
        alert("Your score is " + count);
    }
}, 10000);

var count = 1

function countPoints() {
 count += 1;
 console.log(countPoints)
}

