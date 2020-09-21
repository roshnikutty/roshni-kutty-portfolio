let lastScrollTop = 0;

$('.name').click(event => {
    event.preventDefault();
    $('body, html').animate({ scrollTop: 0 }, 1500);
});

$('.js-more-button').click(event => {
    event.preventDefault();
    $('#more').toggleClass('hidden');
    $('.js-more-button').addClass('hidden');
    $('.js-scroll-top').removeClass('hidden');
    $('body, html').animate({ scrollTop: $(document).height() }, 1500);
});

$('.js-scroll-top').on('click', event => {
    event.preventDefault();
    $('body, html').animate({ scrollTop: 0 }, 1500);
    $('#more').addClass('hidden');
    $('.js-scroll-top').addClass('hidden');
    setTimeout(function () {
        $('.js-more-button').removeClass('hidden');
    }, 1000);
});

$(window).scroll(function () {
    const st = $(this).scrollTop();
    if (st > lastScrollTop) {
        $('.js-header').addClass('showOnScroll');
    }
    lastScrollTop = st;
});
