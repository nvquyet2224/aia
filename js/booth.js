(function () {

    new Swiper('.famous-slider', {
        effect: "slide",
        loop: true,
        speed: 800,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false
        },
        centeredSlides: true,
        slidesPerView: 1,
        slidesPerGroup: 1,
        watchOverflow: true,
        spaceBetween: 20,
        breakpoints: {
            1101: {
                slidesPerView: 3,
                slidesPerGroup: 1,
                spaceBetween: 0,
            }
        },
        navigation: {
            nextEl: '.famous-box .swiper-button-next',
            prevEl: '.famous-box .swiper-button-prev',
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

    var thumbSwipe = new Swiper('.thumb-slider', {
        effect: "slide",
        loop: false,
        speed: 800,
        slidesPerView: 3,
        slidesPerGroup: 1,
        //freeMode: true,
        //watchSlidesProgress: true,
        //watchOverflow: true,
        spaceBetween: 16,
        breakpoints: {
            1101: {
                slidesPerView: 6,
                slidesPerGroup: 1,
                spaceBetween: 20,
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

    new Swiper('.album-slider', {
        effect: "slide",
        loop: false,
        speed: 800,
        centeredSlides: true,
        slidesPerView: 1,
        slidesPerGroup: 1,
        watchOverflow: true,
        spaceBetween: 20,
        navigation: {
            nextEl: '.album-box .swiper-button-next',
            prevEl: '.album-box .swiper-button-prev',
        },
        a11y: {
            enabled: false,
        },
        thumbs: {
            swiper: thumbSwipe,
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
