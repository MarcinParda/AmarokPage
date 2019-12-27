$('.arrowUp').fadeOut();
$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 0) {
        $('.arrowUp').fadeIn();
    } else {
        $('.arrowUp').fadeOut();
    }
});