var questions = [
    {
        title: 'Trong các mối ưu tiên tài chính dưới đây, <br>đâu là mối ưu tiên hàng đầu của bạn?',
        answers: [
            { title: 'Gia tăng tài sản', result: 'next' },
            { title: 'Sống khỏe mỗi ngày', result: 'next' },
            { title: 'Học vấn cho con', result: 'next' },
            { title: 'Tuổi vàng an nhàn', result: 'next' },
        ],
        img: 'images/booth/but-pha/card-img.png'
    },
    {
        title: 'Bạn đã chuẩn bị những gì để biến <br>những mục tiêu này thành hiện thực?',
        answers: [
            { title: 'Đầu tư chứng khoản', result: 'A' },
            { title: 'Đầu tư bất động sản', result: 'B' },
            { title: 'Khởi nghiệp', result: 'C' },
            { title: 'Tiết kiệm', result: 'D' },
            { title: 'Duy trì tốt công việc hiện tại', result: 'E' },
        ],
        img: 'images/booth/but-pha/card-img.png'
    },
    {
        title: 'Mỗi tháng bạn đã sẵn sàng ĐẦU TƯ <br>bao nhiêu phần trăm thu nhập cho kế hoạch này?',
        answers: [
            { title: 'Dưới 30%', result: 'invest' },
            { title: '30% - 50%', result: 'invest' },
            { title: 'Trên 50%', result: 'invest' }
        ],
        img: 'images/booth/but-pha/card-img.png'
    },
    {
        title: 'Mỗi tháng bạn sẵn sàng TIẾT KIỆM <br>bao nhiêu phần trăm thu nhập cho kế hoạch này?',
        answers: [
            { title: 'Dưới 20%', result: 'life' },
            { title: '20% - 30%', result: 'life' },
            { title: 'Trên 30%', result: 'life' }
        ],
        img: 'images/booth/but-pha/card-img.png'
    }
];


var triangleIcon = `<svg viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="24" r="24" />
    <path
        d="M33.874 29.0869L24.874 13.5069C24.7868 13.3531 24.6603 13.225 24.5074 13.136C24.3546 13.0469 24.1809 13 24.004 13C23.8271 13 23.6534 13.0469 23.5005 13.136C23.3477 13.225 23.2212 13.3531 23.134 13.5069L14.134 29.0869C14.0462 29.239 14 29.4114 14 29.5869C14 29.7625 14.0462 29.9349 14.134 30.0869C14.2221 30.2396 14.3489 30.3662 14.5017 30.454C14.6545 30.5418 14.8278 30.5876 15.004 30.5869H33.004C33.1802 30.5876 33.3535 30.5418 33.5062 30.454C33.659 30.3662 33.7859 30.2396 33.874 30.0869C33.9617 29.9349 34.0079 29.7625 34.0079 29.5869C34.0079 29.4114 33.9617 29.239 33.874 29.0869ZM16.734 28.5869L24.004 16.0069L31.274 28.5869H16.734Z"
        fill="white" />
    </svg>`;

var circleIcon = `<svg viewBox="0 0 48 48" fill="none">
  <circle cx="24" cy="24" r="24" />
  <path
    d="M24 15C22.0222 15 20.0888 15.5865 18.4443 16.6853C16.7998 17.7841 15.5181 19.3459 14.7612 21.1732C14.0043 23.0004 13.8063 25.0111 14.1922 26.9509C14.578 28.8907 15.5304 30.6725 16.9289 32.0711C18.3275 33.4696 20.1093 34.422 22.0491 34.8079C23.9889 35.1937 25.9996 34.9957 27.8268 34.2388C29.6541 33.4819 31.2159 32.2002 32.3147 30.5557C33.4135 28.9112 34 26.9778 34 25C34 23.6868 33.7413 22.3864 33.2388 21.1732C32.7363 19.9599 31.9997 18.8575 31.0711 17.9289C30.1425 17.0003 29.0401 16.2638 27.8268 15.7612C26.6136 15.2587 25.3132 15 24 15ZM24 33C22.4178 33 20.871 32.5308 19.5554 31.6518C18.2398 30.7727 17.2145 29.5233 16.609 28.0615C16.0035 26.5997 15.845 24.9911 16.1537 23.4393C16.4624 21.8874 17.2243 20.462 18.3432 19.3431C19.462 18.2243 20.8874 17.4624 22.4393 17.1537C23.9911 16.845 25.5997 17.0035 27.0615 17.609C28.5233 18.2145 29.7727 19.2398 30.6518 20.5554C31.5308 21.871 32 23.4177 32 25C32 27.1217 31.1572 29.1566 29.6569 30.6569C28.1566 32.1571 26.1217 33 24 33Z"
    fill="white" />
</svg>`;

var squareIcon = `<svg viewBox="0 0 48 48" fill="none">
<circle cx="24" cy="24" r="24" />
<path
  d="M33 15H15C14.7348 15 14.4804 15.1054 14.2929 15.2929C14.1054 15.4804 14 15.7348 14 16V34C14 34.2652 14.1054 34.5196 14.2929 34.7071C14.4804 34.8946 14.7348 35 15 35H33C33.2652 35 33.5196 34.8946 33.7071 34.7071C33.8946 34.5196 34 34.2652 34 34V16C34 15.7348 33.8946 15.4804 33.7071 15.2929C33.5196 15.1054 33.2652 15 33 15ZM32 33H16V17H32V33Z"
  fill="white" />
</svg>`;

var winResultA = `
<p>Chúc mừng bạn đã đặt những bước đầu tiên để biến kế hoạch tài chính của mình thành hiện thực.
<br>Cùng tìm hiểu kĩ hơn về những cách sẽ giúp bạn hiện thực hóa giấc mơ nhé. AIA và VPB gửi tới bạn giải pháp ĐẦU TƯ THỊNH VƯỢNG với những lựa chọn đầu tư linh hoạt, lợi nhuận tiềm năng và bảo vệ tài chính trước những rủi ro sức khỏe.
Bấm vào đây để nhận thông tin chi tiết.</p>`;
var brochureA = `pdfs/ILP3_Leaflet-VPBANK-FINAL.pdf`;

var winResultB = `
<p>Chúc mừng bạn đã đặt những bước đầu tiên để biến kế hoạch tài chính của mình thành hiện thực.
<br>Cùng tìm hiểu kĩ hơn về những cách sẽ giúp bạn hiện thực hóa giấc mơ nhé. AIA và VPB gửi tới bạn giải pháp SỐNG TRỌN CÂN BẰNG  giúp bạn có 1 kế hoạch toàn diệncho mục tiêu của mình.
Bấm vào đây để nhận thông tin chi tiết.</p>`;
var brochureB = `pdfs/UL4_E leaflet-VPB.pdf`;


var indexCard = 1;
var core = 0;

var questionIndex = 0;
var answerTxt = '';

var roundCore = $('#greetingCore');
var cardTitle = $('.card-game__top');
var qsTitle = $('.card-game__title');
var qsImage = $('#qsImage');
var nextQuestion = $('#nextQuestion');
var answersBox = $('.answers');

function createAnswers() {

    answersBox.html('');
    var answers = questions[questionIndex].answers;
    var icon = triangleIcon;

    for (var i = 0; i < answers.length; i++) {
        if (i === 0) {
            icon = triangleIcon;
        } else if (i === 1) {
            icon = circleIcon;
        } else if (i === 2) {
            icon = squareIcon;
        } else if (i === 3) {
            icon = triangleIcon;
        } else if (i === 4) {
            icon = circleIcon;
        }

        answersBox.append(`<li data-index="${i}">
            <span class="answer-icon pic">${icon}</span>
            <span class="answer-txt">${answers[i].title}</span>
        </li>`);
    }
}


function resetCard() {
    qsTitle.html('');
    qsImage.attr('src', 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7');
    nextQuestion.prop('disabled', true);
}

function setCard() {
    resetCard();

    var card = questions[questionIndex];
    cardTitle.html(`CÂU HỎI ${indexCard}/3`);
    createAnswers();
    qsTitle.html(card.title);
    qsImage.attr('src', card.img);
}


// Open T&C VPBank Game
$(document).on('click', '#greetingStart', function () {
    openPopup('.popup-game');
    scrollBox('.popup-game');
});

//START VPBank Game
$(document).on('click', '#startVBBankGame', function () {
    $('.greeting-game').addClass('playing-game');
    setCard();
    closePopup();
});


// Answer event
$(document).on('click', '.answers li', function () {
    // allway win
    $('.answers li').removeClass('win');
    $(this).addClass('win');
    var index = $(this).attr('data-index');
    answerTxt = questions[questionIndex].answers[index].result;
    nextQuestion.prop('disabled', false);
});



// Next Questtion
$(document).on('click', '#nextQuestion', function () {

    indexCard++;
    core += 7;
    core = core <= 20 ? core : 20;
    roundCore.html(core);

    if (answerTxt === 'invest' || answerTxt === 'life') {
        if (answerTxt === 'invest') {
            $('#resultBrief').html(winResultA);
            $('#resultBrochure').attr('href', brochureA);
        } else {
            $('#resultBrief').html(winResultB);
            $('#resultBrochure').attr('href', brochureB);
        }
        $('.greeting-game__box').addClass('hide');
        $('.greeting-game__result').addClass('show');
    } else {
        if (answerTxt === 'next') {
            questionIndex++;
        } else if (answerTxt === 'A' || answerTxt === 'B' || answerTxt === 'C') {
            questionIndex = 2;
        } else if (answerTxt === 'D' || answerTxt === 'E') {
            questionIndex = 3;
        }
        resetCard();
        setCard();
    }

});
