var ua = navigator.userAgent;
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    ua
);

function checkVisible(elm) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(
        document.documentElement.clientHeight,
        window.innerHeight
    );
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

[].slice.call(document.querySelectorAll('.nav__but')).forEach(function (elm) {
    elm.addEventListener('click', function () {
        if (document.body.classList.contains('open__menu')) {
            document.body.classList.remove('open__menu');
            this.classList.remove('nav__but--open');
            this.classList.add('nav__but--close');

        } else {
            document.body.classList.add('open__menu');
            this.classList.remove('nav__but--close');
            this.classList.add('nav__but--open');
        }
    });
});

var threshold = 500;
function ImgLazyLoad() {
    lazyImages = window.innerWidth > 1101 ? document.querySelectorAll('.cm.lazy, .pc.lazy') : document.querySelectorAll('.cm.lazy, .sp.lazy');
    [].slice.call(lazyImages).forEach(function (elm) {
        if (elm.getBoundingClientRect().top <= window.innerHeight + threshold) {
            elm.setAttribute('src', elm.getAttribute('data-src'));
            elm.classList.remove('lazy');
        }
    });
}

// Active navigation
if (document.querySelector('.nav__wrap') !== null) {
    var nav = document.body.getAttribute("data-page");
    document.querySelector('.nav__wrap li[data-nav=' + nav + '') && document.querySelector('.nav__wrap li[data-nav=' + nav + '').classList.add("active");
    document.querySelector('.account-menu li[data-nav=' + nav + '') && document.querySelector('.account-menu li[data-nav=' + nav + '').classList.add("active");

}

// Open popup
function openPopup(popup) {
    document.querySelector('.popup__open') && document.querySelector('.popup__open').classList.remove('popup__open');
    document.body.classList.add('no-scroll');
    document.querySelector(popup).classList.add('popup__open');
}

// Close Popup
function closePopup() {
    document.querySelector('.popup__open') && document.querySelector('.popup__open').classList.remove('popup__open');
    document.body.classList.remove('no-scroll');
}

var scrollTop;

function onScroll() {

    scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    [].slice.call(document.querySelectorAll('.header')).forEach(function (elm) {
        scrollTop > 130 ? elm.classList.add('fixed') : elm.classList.remove('fixed');
    });


    [].slice.call(document.querySelectorAll('.banner-box')).forEach(function (elm) {
        //elm.setAttribute('style', '-webkit-transform: translateY(' + 0.2 * scrollTop + 'px); transform: translateY(' + 0.2 * scrollTop + 'px)');
    });

    /*
    [].slice.call(document.querySelectorAll('.ani')).forEach(function (elm) {
        if (checkVisible(elm)) {
            elm.classList.add('animate');
        } else {
            elm.classList.remove('animate');
        }
    });*/

    ImgLazyLoad();

}

function Resize() {
    if (!isMobile) {
    }

    ImgLazyLoad();
}

function Rotate() {
    ImgLazyLoad();
}

onScroll();

window.addEventListener('scroll', function () {
    onScroll();
});

window.addEventListener('orientationchange', function () {
    Rotate();
});

window.addEventListener('resize', function () {
    Resize();
});


// Page Ready
(function () {
    setTimeout(function () {
        onScroll();
    }, 100);
})();
