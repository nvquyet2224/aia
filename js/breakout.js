(function () {
    new Swiper('.catalog-slider', {
        effect: "slide",
        loop: true,
        speed: 800,
        slidesPerView: 1,
        slidesPerGroup: 1,
        watchOverflow: true,
        spaceBetween: 20,
        navigation: {
            nextEl: '.catalog-box .swiper-button-next',
            prevEl: '.catalog-box .swiper-button-prev',
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

    new Swiper('.examiner-slider', {
        effect: "slide",
        loop: false,
        speed: 800,
        slidesPerView: 3,
        slidesPerGroup: 3,
        watchOverflow: true,
        spaceBetween: 15,
        breakpoints: {
            1101: {
              spaceBetween: 44,
            }
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
