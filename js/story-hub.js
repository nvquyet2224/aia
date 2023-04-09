(function () {

    new Swiper('.top6-slider', {
        effect: "slide",
        loop: false,
        speed: 800,
        slidesPerView: 1,
        slidesPerGroup: 1,
        watchOverflow: true,
        spaceBetween: 20,
        breakpoints: {
            1101: {
                slidesPerView: 6,
                slidesPerGroup: 6,
                spaceBetween: 0,
            }
        },
        navigation: {
            nextEl: '.top6-box .swiper-button-next',
            prevEl: '.top6-box .swiper-button-prev',
        },
        a11y: {
            enabled: false,
        },
        on: {
            init: function () { },
            transitionStart: function () {
            },
            transitionEnd: function () {
            },
        },
    });

})();
