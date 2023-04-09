var ballNumber = 5;
var ballImage = 'images/falling/ball.png';
var core = 0;
var delCore = 5;
var count = 0;

var intervalCountDown;

function countDown() {
    intervalCountDown = setInterval(function () {
        $('#fallingTimer').text(count++);
        if (count > 60) {
            clearIntervalCountDown();
        }
    }, 1000);
}

function clearIntervalCountDown() {
    clearInterval(intervalCountDown);
}


var $player = $('#falling-player'),
    $wrapper = $('#falling-wrapper');

var leftMouse = 60,
    rightMouse = 60,
    leftSpaceRandoom = 0,
    rightSpaceRandoom = 100;

if (window.innerWidth <= 1100) {
    leftMouse = rightMouse = 0;
    leftSpaceRandoom = 0;
    rightSpaceRandoom = 30;
}

function movePlayer(e) {

    if (e.pageX >= window.innerWidth - rightMouse) {
        e.pageX = window.innerWidth - rightMouse;
    } else if (e.pageX <= leftMouse) {
        e.pageX = leftMouse;
    }
    TweenLite.to($player, 1 / 2, {
        css: {
            left: e.pageX
        }
    });

}

//addEventListener
//$($wrapper).on('mousemove', movePlayer);
//$($wrapper).on('touchmove', movePlayer);

if (window.innerWidth <= 1100 && isMobile) {
    $("#falling-player").draggable({ axis: "x", containment: ".falling-player" });
} else {
    $($wrapper).on('mousemove', movePlayer);
}



TweenLite.set("#falling-wrapper", { perspective: 600 });

var container = document.getElementById("falling-wrapper");

function R(min, max) { return min + Math.random() * (max - min) };

function ResetGame() {
    clearIntervalCountDown();
    core = 0;
    count = 0;
    $('#fallingCore').text(core);
    $('#fallingTimer').text(count++);
    countDown();
    $('.falling').addClass('playing');
    $('#fallingStart').remove();
}


function InitGame() {

    for (i = 0; i < ballNumber; i++) {
        createBall();
    }

    function createBall() {
        var ball = document.createElement('div');
        ball.style.backgroundImage = 'url(' + ballImage + ')';
        TweenMax.set(ball, { attr: { class: 'falling-ball' }, x: R(leftSpaceRandoom, window.innerWidth - rightSpaceRandoom), y: -450 });
        container.appendChild(ball);
        animm(ball);
    }

    function animm(elm) {
        TweenMax.to(elm, R(2, 8), { y: window.innerHeight + 50, ease: Linear.easeNone, repeat: -1, delay: -1 });
        TweenMax.to(elm, R(2, 8), { x: '+=5', repeat: -1, yoyo: true, ease: Sine.easeInOut });
        TweenMax.to(elm, R(2, 8), { repeat: -1, yoyo: true, ease: Sine.easeInOut, delay: -3, onUpdate: checkHit });
    }

    function checkHit() {
        var check = collision($(this.target));
        if (check) {
            core += delCore;
            $('#fallingCore').text(core);

            TweenMax.killTweensOf($(this.target));
            $($(this.target)).removeAttr("style");
            $($(this.target)).remove();

            // Create New Ball
            createBall();

        }

        if (core <= 100 && count >= 60) { // Lost
            TweenMax.killTweensOf('.falling-ball');
            $(".falling-ball").removeAttr("style");
            $('.falling-ball').remove();

            $('.falling').removeClass('playing');
            $('.falling').addClass('lost');
            openPopup('.lost-game');

        } else if (core == 100 && count <= 60) { // Win
            TweenMax.killTweensOf('.falling-ball');
            $(".falling-ball").removeAttr("style");
            $('.falling-ball').remove();

            $('.falling').removeClass('playing');
            $('.falling').addClass('win');
            openPopup('.win-game');

        }

    }

    function collision($ball) {

        var x1 = $ball.offset().left;
        var y1 = $ball.offset().top;

        var h1 = $ball.innerHeight();
        var w1 = $ball.innerWidth();

        var b1 = y1 + h1;
        var r1 = x1 + w1;

        var x2 = $player.offset().left;
        var y2 = $player.offset().top;

        var h2 = $player.innerHeight();
        var w2 = $player.innerWidth();

        var b2 = y2 + h2;
        var r2 = x2 + w2;

        if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;

        return true;
    }

}
//End Game

function Resize() {
    if (!isMobile) {
        setTimeout(function () {
            TweenMax.killTweensOf('.falling-ball');
            $(".falling-ball").removeAttr("style");
            $('.falling-ball').remove();
            InitGame();
        }, 100);

    }
}

function Rotate() {
    setTimeout(function () {
        TweenMax.killTweensOf('.falling-ball');
        $(".falling-ball").removeAttr("style");
        $('.falling-ball').remove();
        InitGame();
    }, 100);
}


window.addEventListener('orientationchange', function () {
    Rotate();
});

window.addEventListener('resize', function () {
    Resize();
});


(function () {
    $('#fallingStart, .playAgain').click(function () {
        closePopup();
        ResetGame();
        InitGame();
    });
})();