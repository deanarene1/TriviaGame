$(document).ready(function () {

    //start button

    $("#timer").text("2:00");

    var interval = setInterval(function () {
        var presentTime = $("#timer").text();
        var timeArray = presentTime.split(/[:]+/);
        var m = timeArray[0];
        var s = checkSecond((timeArray[1] - 1));
        if (s == 59) {
            m = m - 1
        }

        console.log(m);
        console.log(s);
        $("#timer").text(m + ":" + s);

        if (m === "0" && s === "00") {
            alert("Time's Up!");
            clearInterval(interval);

        }

    }, 1000);



    function checkSecond(sec) {
            if (sec < 10 && sec >= 0) { sec = "0" + sec }; 
            if (sec < 0) { sec = "59" };
            return sec;
        }


    //opacity in background image

    //done button sends you to page saying the amount of incorrect/correct answers

})