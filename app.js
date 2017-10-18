$('.name').click(function (event) {
    event.preventDefault();
    $('body, html').animate({ scrollTop: 0 }, 1500);
});

$('.js-more-button').click(function (event) {
    event.preventDefault();
    $('#more').toggleClass('hidden');
    $('.js-more-button').addClass('hidden');
    $('.js-scroll-top').removeClass('hidden');
    $('body, html').animate({ scrollTop: $(document).height() }, 1500);
})

$('.js-scroll-top').on('click', function (event) {
    event.preventDefault();
    $('body, html').animate({ scrollTop: 0 }, 1500);
    $('#more').addClass('hidden');
    $('.js-scroll-top').addClass('hidden');
    //Adding setTimeout so that the more button does not show before scroll up
    setTimeout(function () {
        $('.js-more-button').removeClass('hidden');
    }, 1000);
});

var lastScrollTop = 0;
$(window).scroll(function (event) {
    var st = $(this).scrollTop();
    if (st > lastScrollTop) {
        $('.js-header').addClass('showOnScroll');
    }
    lastScrollTop = st;
});
