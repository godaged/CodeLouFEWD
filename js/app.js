// show sub menu when mouse over
$(".hotel").mouseover(function() {
    $(".hotel-list").show();
});

$(".museum").mouseover(function() {
    $(".museum-list").show();
});

$(".food").mouseover(function() {
    $(".food-list").show();
});

// hide sub menu when mouseout
$(".hotel").mouseout(function() {
    $(".hotel-list").hide();
});

$(".museum").mouseout(function() {
    $(".museum-list").hide();
});

$(".food").mouseout(function() {
    $(".food-list").hide();
});

//Click Hamberger to show mobile menu
$(".mobile-bar").click(function() {
    $(".mobile-barX").show();
    $(".main-nav").show();
});

//Click X to hide mobile menu
$(".mobile-barX").click(function() {
    $(".main-nav").hide();
    $(".mobile-barX").hide();
});

// Hide & show menu & welcome banner when resizing the webpage
$(window).resize(function() {
    if ($(window).width() >= 650) {
        $(".main-nav").show();
        $(".welcome").show();
        $(".mobile-barX").hide();
    } else {
        $(".main-nav").hide();
        $(".mobile-barX").hide();
        $(".welcome").hide();
    }
});


// Hide mobile menu when scrolling the webpage
$(window).scroll(function() {
    if ($(this).scrollTop()) {
        if ($(window).width() >= 650) {
            $(".mobile-barX").hide();
        } else {
            $(".mobile-barX").hide();
            $(".main-nav").hide();
        }
    }
});

// Hide & show menu & welcome banner when reload & launch the webpage
$(function() {
    if ($(window).width() >= 650) {
        $(".main-nav").show();
        $(".welcome").show();
    }
});


// Photo slideshow with 5 seconds interval and 3 seconds delay

$(function() {
    $('.intro-slide-show-img img').hide();
});
$(function() {
    var images = $('.intro-slide-show-img img'),
        index = 0;

    setInterval(looper, 5000);
    looper();

    function looper() {

        images.eq(index).fadeIn(2500).delay(3000).fadeOut(0);
        //using mode is the best but it gives bad lai over images on top
        //index = (index + 1) % images.length
        index += 1;
        if (index > images.length)
            index = 0;
    }
})