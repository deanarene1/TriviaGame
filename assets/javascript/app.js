$(document).ready(function () {

    //start button

    $("#timer").text("1:30");

    var interval = setInterval(function () {
        var presentTime = $("#timer").text();
        var timeArray = presentTime.split(/[:]+/);
        var m = timeArray[0];
        var s = checkSecond((timeArray[1] - 1));
        if (s == 59) {
            m = m - 1
        }

        $("#timer").text(m + ":" + s);

        if (m === "0" && s === "00") {
            clearInterval(interval);
            $("#timer").text("Time's Up!");
            $(".soclassy").hide();
            
            $(".question").hide();

            $(this).hide();
            $(".btn").hide();
    
            $(".classy").hide();
    
            let correct = $("input:checked[value='ans']").length;
            let incorrect = $("input:checked[value='inc']").length;
    
    
            $(".correct").text("Correct Answers: " + correct);
            $(".incorrect").text("Incorrect Answers: " + incorrect);

        }

    }, 1000);



    function checkSecond(sec) {
        if (sec < 10 && sec >= 0) { sec = "0" + sec };
        if (sec < 0) { sec = "59" };
        return sec;
    }


    $(".btn").click(function () {

        $(".question").hide();

        $(this).hide();

        $(".classy").hide();

        let correct = $("input:checked[value='ans']").length;
        let incorrect = $("input:checked[value='inc']").length;


        $(".correct").text("Correct Answers: " + correct);
        $(".incorrect").text("Incorrect Answers: " + incorrect);


    });


});