/* New function declared. */
function startClock() {
    var today = new Date(); // New Date object. Contains current date and time.
    var hour = today.getHours(); // .getHours() retrieves current hour.
    var minutes = today.getMinutes(); // .getMinutes() retrieves current minute.
    var seconds = today.getSeconds(); // .getSeconds() retireves current second.
    minutes = checkTime(minutes); 
    seconds = checkTime(seconds);

    // Selecting the element we want to display our clock on by ID ('clock') and using the .innerHTML function to add our variables (hour, minutes & seconds) and the data inside of them to our element with strings in between (":").
    document.getElementById('clock').innerHTML = hour + ":" + minutes + ":" + seconds;

    var time = setTimeout(startClock, 500);
}

/* New function declared */
function checkTime(i) {
    // If i is less than 10 then assign "0" to i and add together i + i.
    if (i < 10) {
        i = "0" + i
    };
    return i;
}