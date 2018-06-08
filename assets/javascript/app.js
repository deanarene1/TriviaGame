$(document).ready(function () {



    $("#timer").text("02:00");
    var counter = (2 + ":" + 00);

    function triviaStart() {
        intervalId = setInterval(count, 1000);
    }

    function stop() {
        clearInterval(intervalId);
        alert("Times up!");
    }

    function count() {
        time--;
        var conversion = timeConverter(time);
        $("#timer").text(conversion);

    }

    function timeConverter(t) {

        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        if (minutes === 0) {
            minutes = "00";
        }
        else if (minutes < 10) {
            minutes = "0" + minutes;
        }

        return minutes + ":" + seconds;
    }

    //when timer ends
    //tells you the amount of answers you got right or wrong

    //when the SUBMIT button is clicked
    //amount of correct and incorrect guesses comes up

})