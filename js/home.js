(function () {
    var swiper = new Swiper('.banner-slider', {
        effect: "slide",
        loop: false,
        speed: 800,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        watchOverflow: true,
        spaceBetween: 0,
        a11y: {
            enabled: false,
        },
        pagination: {
              el: '.banner-box .swiper-pagination',
              clickable: true,
        },
        on: {
            init: function () { },
            transitionStart: function () {
            },
            transitionEnd: function () {
            },
        },
    });

    document.querySelector('.swiper-container').addEventListener('mouseenter', e => {
        swiper.autoplay.stop();
    });

    document.querySelector('.swiper-container').addEventListener('mouseleave', e => {
        swiper.autoplay.start();
    });

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

    new Swiper('.top3-slider', {
        effect: "slide",
        loop: false,
        speed: 800,
        slidesPerView: 1,
        slidesPerGroup: 1,
        watchOverflow: true,
        spaceBetween: 20,
        breakpoints: {
            1101: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 0,
            }
        },
        navigation: {
            nextEl: '.top3-box .swiper-button-next',
            prevEl: '.top3-box .swiper-button-prev',
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
