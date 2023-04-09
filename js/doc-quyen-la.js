(function () {
    new Swiper('.video__silder-la', {
        effect: "slide",
        loop: false,
        speed: 800,
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 12,
        watchOverflow: true,
        breakpoints: {
            1101: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 24,
            },
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

    new Swiper('.finance__silder-la', {
        effect: "slide",
        loop: false,
        speed: 800,
        slidesPerView: 1.2,
        slidesPerGroup: 1,
        spaceBetween: 50,
        watchOverflow: true,
        breakpoints: {
            1101: {
                slidesPerView: 4,
                slidesPerGroup: 4,
                spaceBetween: 72,
            },
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
