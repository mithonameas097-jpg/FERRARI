$(function () {

    $(".small-text")
        .delay(500)
        .animate({
            width: "toggle"
        }, 600);

    $(".big-text")
        .delay(950)
        .animate({
            width: "toggle"
        }, 800);
    $("#engine").click(function(){
        $("#engine_noise")[0].play();
    });
});