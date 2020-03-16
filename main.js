$(document).ready(function () {
    $("#open-close").click(function () {
        $(".oc-button").toggle();
    });

    $(".button").click(function () {
        console.log($(this).attr('id'));
        $("#floor").text($(this).attr('id'));
        $(".button").removeClass("active");
        $(this).toggleClass("active");
    });

    $(".help").click(function () {
        $(this).toggleClass("active");
    });
});