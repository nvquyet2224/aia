var gallerySwipe;

(function () {

    gallerySwipe = new Swiper('.gallery-slider', {
        effect: "slide",
        loop: false,
        speed: 800,
        slidesPerView: 1,
        slidesPerGroup: 1,
        watchOverflow: true,
        spaceBetween: 20,
        breakpoints: {
            1101: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 0,
            }
        },
        navigation: {
            nextEl: '.gallery-box .swiper-button-next',
            prevEl: '.gallery-box .swiper-button-prev',
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
