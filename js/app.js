$(".museum").mouseover(function() {
    $(".museum-list").show();
});

$(".museum").mouseout(function() {
    $(".museum-list").hide();
});


$(".mobile-bar").click(function() {
    // if ($(".main-nav").is(":visible"))
    $(".mobile-barX").show()
    $(".main-nav").show()
});

$(".mobile-barX").click(function() {
    $(".main-nav").hide()
    $(".mobile-barX").hide()
});

$(window).resize(function() {
    if ($(window).width() > 632)
        $(".main-nav").show()
    else
        $(".main-nav").hide()
});

$(function() {
    if ($(window).width() > 632)
        $(".main-nav").show()
});