// Click Game Start
var countdown;
var countdown_number;

function countdown_init() {
    countdown_number = 11;
    countdown_trigger();
}

function countdown_trigger() {
    if(countdown_number > 0) {
        countdown_number--;
        document.getElementById('countdown_text').innerHTML = countdown_number;
        if(countdown_number > 0) {
            countdown = setTimeout('countdown_trigger()', 1000);
        }
}

function countdown_clear() {
    clearTimeout(countdown);
}
