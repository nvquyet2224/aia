var cropImg;
var imgData;

// Create croppie
if (document.getElementById('fileImageAvatar')) {
    fileImageAvatar.onchange = function (byThis) {
        var files = byThis.target.files;
        processFilesAvatar(files);
    }
    cropImg = $('#cropImg').croppie({
        viewport: {
            width: '100%',
            height: '100%'
        }
    });
}

function uploadFileAvatar(file) {

    var type = file.type.split('/')[1];
    var arrType = ['jpg', 'jpeg', 'png'];
    var isType = arrType.indexOf(type);

    if (isType < 0) {
        //document.querySelector('body').classList.add('no__scroll');
        //document.querySelector('.popup__error').classList.add('show');
        return;
    }

    var reader = new FileReader();
    reader.onload = function (e) {
        var data = e.target.result;
        imgData = data;

        // Open Popup game
        $('.popup').removeClass('show');
        $('.play__game').addClass('show');

        cropImg.croppie('bind', {
            url: imgData
        }).then(function () {
            cropImg.croppie('setZoom', 1)
        });

    }

    reader.readAsDataURL(file);

}

function processFilesAvatar(files) {
    //This function can process loading by use list temp to get total size
    if (!files || !files.length) {
        console.log('false');
        return;
    } else {
        uploadFileAvatar(files[0]);
    }
}

// Canvas and save
function simulateDownloadImageClick(uri, filename) {
    var link = document.createElement('a');
    if (typeof link.download !== 'string') {
        window.open(uri);
    } else {
        link.href = uri;
        link.download = filename;
        accountForFirefox(clickLink, link);
    }
}

function clickLink(link) {
    link.click();
}

function accountForFirefox(click) { // wrapper function
    let link = arguments[1];
    document.body.appendChild(link);
    click(link);
    document.body.removeChild(link);
}

var isShare = true;
function createCanvas() {
    $('canvas').remove();
    $('.real__download').html('');

    var bigCanvas = $('.real__download');

    var imgW = $(".frame__result").width();
    var imgH = $(".frame__result").height();

    var delScale = 600 / imgW;

    var scaledElement = $(".frame__result").clone()
        .css({
            'width': imgW * delScale,
            'height': imgH * delScale,
        }).appendTo(bigCanvas);

    var scaleImg = $(scaledElement).find('.cr-image');

    var opacity = $(scaleImg).css('opacity');
    var transform = $(scaleImg).css('transform');

    var origin = $(scaleImg).css('transform-origin');
    origin = origin.split(' ');
    var originX = origin[0].split('px')[0] * delScale;
    var originY = origin[1].split('px')[0] * delScale;

    var matrix = transform.split('(')[1];
    matrix = matrix.split(')')[0];
    matrix = matrix.split(',');

    var a = matrix[0];
    var b = matrix[1];
    var scale = Math.sqrt(a * a + b * b);

    var translateX = matrix[4] * delScale;
    var translateY = matrix[5] * delScale;
    var translateZ = 0;

    var newStyle = `
    opacity: ${opacity}; transform: translate3d(${translateX}px, ${translateY}px, ${translateZ}px) scale(${scale});transform-origin: ${originX}px ${originY}px;
  `;

    scaleImg.attr('style', newStyle);

    bigCanvas.css({
        'width': imgW * delScale,
        'height': imgH * delScale
    });


    html2canvas(document.querySelector('.real__download'), {
    }).then(function (canvas) {
        document.body.appendChild(canvas);
        setTimeout(function () {
            isShare = true;
            var myCanvas = document.getElementsByTagName("canvas")[0];
            var url = myCanvas.toDataURL("image/png");
            simulateDownloadImageClick(url, 'picture.png');
        }, 100);
    });
}

// Download result
$(document).on('click', '.frame-avatar .close-popup_onpage', function () {
    if (isShare) {
        isShare = false;
        setTimeout(function () {
            createCanvas();
        }, 100);
    }

});
