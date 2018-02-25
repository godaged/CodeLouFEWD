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
    $(".mobile-nav").show();
});

//Click X to hide mobile menu
$(".mobile-barX").click(function() {
    $(".mobile-nav").hide();
    $(".mobile-barX").hide();
});

// Hide & show menu & welcome banner when resizing the webpage
$(function() {
    $(window).resize(function() {
        if ($(window).width() < 650) {
            $(".mobile-barX").hide();
            $(".mobile-nav").hide();
        }
        if ($(window).width() >= 633) {
            $(".main-nav").show();
        }
    })
});


// Hide mobile menu when scrolling the webpage
$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop()) {
            if ($(window).width() <= 649) {
                $(".mobile-barX").hide();
                $(".main-nav").hide();
            }
        }

    })
});


$(function() {
    var images = $('.intro-slide-show-img img'),
        index = 0;
    var i = 0;
    setInterval(looper, 5000);
    looper();

    function looper() {
        if (i == 0) {
            images.eq(index).fadeToggle(500).delay(4500);
            images.eq(index).animate({ width: 'toggle' })
            images.eq(index).fadeOut(0)
                //using mode is the best but it gives bad lai over images on top
                //index = (index + 1) % images.length
        } else {
            images.eq(index).fadeToggle(2500).delay(3000).fadeOut(0)
                //using mode is the best but it gives bad lai over images on top
                //index = (index + 1) % images.length
        }
        index += 1;
        if (index > images.length - 1) {
            index = 0;
            i += 1;
            if (i > 1)
                i = 0;
        }
    }
})

//scroll animation to navigate to internal link
$(function() {
    $('.explore').click(function() {
        //following (-40) will move h2 element below the menu bar
        var p = $('#pic').offset().top - 40;
        $('html, body').animate({ scrollTop: p }, 700);
    })
});

$(function() {
    $('.home').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 700);
    })
});



//     alert($('.pic-container h2').offset().top - $(document).scrollTop());
//     alert($(document).scrollTop());
//     var p = $('.pic-container h2').position().top;
//     if ($('.pic-container h2').position().top - $(document).scrollTop() != 0) {
//     if ($(document).scrollTop() != $('.pic-container h2').position().top) {
//     $('.pic-container h2').css('padding-top', '16px');
//