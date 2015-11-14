//Game Start 
debugger;
function gameStart() {
  var counter = 20;

  function countDown() {
    document.timer.field.value = counter-- + ' seconds left';
    if (counter != -1)
        setTimeout('countDown()',1000);
    else
        alert('You lose');
}
countDown()
}