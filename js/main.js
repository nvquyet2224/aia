// Data popup
var type = 'phone';

var registerTitle = `<span class="form-back" id="backToRegister"></span><h3>ĐĂNG KÝ</h3>`;
var loginTitle = `<h3>ĐĂNG NHẬP</h3>`;
var otpTitle = '<h3>NHẬP MÃ OTP</h3>'

var registerPhone = `
    <div class="form-group">
      <label class="input-caption" for="txt_rg_phone">Số điện thoại</label>
      <input type="text" value="" class="input-txt" id="txt_rg_phone" name="txt_rg_phone">
    </div>
    <div class="buts flex__center">
      <button type="button" class="btn bg__purple" id="openFormOtp"><span>TIẾP THEO</span></button>
    </div>
    <div class="links links__help">
      <p class="link">Đã có tài khoản? <span class="hightlight_red openLogin">Đăng nhập ngay</span></p>
    </div>
`;

var loginPhone = `
    <div class="form-group">
      <label class="input-caption" for="txt_lg_phone">Số điện thoại</label>
      <input type="text" value="" class="input-txt" id="txt_lg_phone" name="txt_lg_phone">
    </div>
    <div class="buts flex__center">
      <button type="button" class="btn bg__purple" id="openFormOtp"><span>TIẾP THEO</span></button>
    </div>
    <div class="links links__help">
      <p class="link">Chưa có tài khoản? <span class="hightlight_red openRegister">Đăng ký ngay</span></p>
    </div>
`;

var registerEmail = `
    <div class="form-group">
      <label class="input-caption" for="txt_rg_email">Email</label>
      <input type="text" value="" class="input-txt" id="txt_rg_email" name="txt_rg_email">
    </div>
    <div class="buts flex__center">
      <button type="button" class="btn bg__purple" id="openFormOtp"><span>TIẾP THEO</span></button>
    </div>
    <div class="links links__help">
      <p class="link">Đã có tài khoản? <span class="hightlight_red openLogin">Đăng nhập ngay</span></p>
    </div>
`;

var loginEmail = `
    <div class="form-group">
      <label class="input-caption" for="txt_lg_email">Email</label>
      <input type="text" value="" class="input-txt" id="txt_lg_email" name="txt_lg_email">
    </div>
    <div class="buts flex__center">
      <button type="button" class="btn bg__purple" id="openFormOtp"><span>TIẾP THEO</span></button>
    </div>
    <div class="links links__help">
      <p class="link">Chưa có tài khoản? <span class="hightlight_red openRegister">Đăng ký ngay</span></p>
    </div>
`;

var otpData = `
  <div class="form-group">
    <label class="input-caption" for="login_phone">MÃ OTP</label>
    <div class="otp__list">
      <input type="number" id="otp1" class="input-otp" name="otp1" maxlength="1"
        onKeyPress="if(this.value.length==1) return false;" autofocus>
      <input type="number" id="otp2" class="input-otp" name="otp2" maxlength="1"
        onKeyPress="if(this.value.length==1) return false;">
      <input type="number" id="otp3" class="input-otp" name="otp3" maxlength="1"
        onKeyPress="if(this.value.length==1) return false;">
      <input type="number" id="otp4" class="input-otp" name="otp4" maxlength="1"
        onKeyPress="if(this.value.length==1) return false;">
      <input type="number" id="otp5" class="input-otp" name="otp4" maxlength="1"
        onKeyPress="if(this.value.length==1) return false;">
      <input type="number" id="otp6" class="input-otp" name="otp4" maxlength="1"
        onKeyPress="if(this.value.length==1) return false;">
    </div>
  </div>
  <div class="links">
    <p class="link">Chưa nhận được mã OTP? <br class="sp-h"><span class="resend-otp hightlight_red">Gửi lại</span> (<span
        class="otp-timer">250</span> giây)</p>
  </div>
`;

var otpButtonRegisterPhone = `
  <div class="buts flex__jus">
    <button type="button" class="btn btn__link btn__link--back" id="openFormInput"><span>Đổi số điện thoại</span></button>
    <button type="button" class="btn bg__purple" id="openRegisterAction"><span>Xác nhận</span></button>
  </div>
`;

var otpButtonLoginPhone = `
  <div class="buts flex__jus">
    <button type="button" class="btn btn__link btn__link--back" id="openFormInput"><span>Đổi số điện thoại</span></button>
    <button type="button" class="btn bg__purple" id="openLogged"><span>Xác nhận</span></button>
  </div>
`;

var otpButtonRegisterEmail = `
  <div class="buts flex__jus">
    <button type="button" class="btn btn__link btn__link--back" id="openFormInput"><span>Đổi email đăng ký</span></button>
    <button type="button" class="btn bg__purple" id="openRegisterAction"><span>Xác nhận</span></button>
  </div>
`;

var otpButtonLoginEmail = `
  <div class="buts flex__jus">
    <button type="button" class="btn btn__link btn__link--back" id="openFormInput"><span>Đổi email đăng nhập</span></button>
    <button type="button" class="btn bg__purple" id="openLogged"><span>Xác nhận</span></button>
  </div>
`;

////////////////////////////
/////// REGISTER FLOW //////
////////////////////////////
function setDataRegister(type) {
  $('.register__action').removeClass('is_phone');
  $('.register__action').removeClass('is_email');
  $('.register__action').removeClass('is_facebook');
  $('.register__action').removeClass('is_google');
  if (type === 'phone') {
    // Set data for Popup form__input
    $('.form__input .popup-title').html(registerTitle);
    $('.form__input .popup-detail__action').html(registerPhone);

    // Set data for Popup Register Otp
    $('.form__otp .popup-title').html(otpTitle);
    $('.form__otp .popup-detail__action').html(otpData + otpButtonRegisterPhone);

    // Progress Popup Register Action
    $('.register__action').addClass('is_phone');
    $('#rg_phone').prop('disabled', true);

  } else if (type === 'email') {
    // Set data for Popup form__input
    $('.form__input .popup-title').html(registerTitle);
    $('.form__input .popup-detail__action').html(registerEmail);

    // Set data for Popup Register Otp
    $('.form__otp .popup-title').html(otpTitle);
    $('.form__otp .popup-detail__action').html(otpData + otpButtonRegisterEmail);

    // Progress Popup Register Action
    $('.register__action').addClass('is_email');
    $('#rg_email').prop('disabled', true);
  } else if (type === 'facebook') {

    // Progress Popup Register Action
    $('.register__action').addClass('is_facebook');
  } else if (type === 'google') {

    // Progress Popup Register Action
    $('.register__action').addClass('is_google');
  }

}

// Select register Type
$(document).on('click', '.register__list .btn', function (e) {
  type = $(this).attr('data-type');
  setDataRegister(type);

  if (type === 'phone' || type === 'email') {
    openPopup('.form__input');
  } else if (type === 'facebook' || type === 'google') {
    openPopup('.register__action');
    scrollBox('.register__action');
  }

});

// Open Popup Select Register type
$(document).on('click', '#backToRegister', function (e) {
  openPopup('.select__register');
});

// Open Popup Register Action Otp
$(document).on('click', '#openRegisterAction', function (e) {
  openPopup('.register__action');
  scrollBox('.register__action');
});


// Open Register Popup
$(document).on('click', '.openRegister', function (e) {
  // Reset All flow Login Popup
  $('.form__input .popup-title').html('');
  $('.form__input .popup-detail__action').html('');
  $('.form__otp .popup-title').html('');
  $('.form__otp .popup-detail__action').html('');

  // Open Register Type
  openPopup('.select__register');
});



/////////////////////////
/////// LOGIN FLOW //////
/////////////////////////
function setDataLogin(type) {

  if (type === 'phone') {
    // Set data for Popup form__input
    $('.form__input .popup-title').html(loginTitle);
    $('.form__input .popup-detail__action').html(loginPhone);

    // Set data for Popup Register Otp
    $('.form__otp .popup-title').html(otpTitle);
    $('.form__otp .popup-detail__action').html(otpData + otpButtonLoginPhone);


  } else if (type === 'email') {
    // Set data for Popup form__input
    $('.form__input .popup-title').html(loginTitle);
    $('.form__input .popup-detail__action').html(loginEmail);

    // Set data for Popup Register Otp
    $('.form__otp .popup-title').html(otpTitle);
    $('.form__otp .popup-detail__action').html(otpData + otpButtonLoginEmail);
  }

}

// Open Login Popup
$(document).on('click', '.openLogin', function (e) {
  // Reset All flow Register Popup
  $('.form__input .popup-title').html('');
  $('.form__input .popup-detail__action').html('');
  $('.form__otp .popup-title').html('');
  $('.form__otp .popup-detail__action').html('');

  // Open Login Type
  openPopup('.select__login');
});


// Select Login Type
$(document).on('click', '.login__list .btn', function (e) {
  type = $(this).attr('data-type');

  setDataLogin(type);

  if (type === 'phone' || type === 'email') {
    openPopup('.form__input');
  }


});

// Open Popup Login Otp
$(document).on('click', '#openLoginOtp', function (e) {
  openPopup('.login__otp');
});


///////////////////////////////////////////////
// Function Common For Register And Login /////
///////////////////////////////////////////////

// Open Popup Form Input
$(document).on('click', '#openFormInput', function (e) {
  openPopup('.form__input');
});

// Open Popup Form Otp
$(document).on('click', '#openFormOtp', function (e) {
  openPopup('.form__otp');
});



// End Data popup



var loading = true;

// Reset error Input
function inputHolder() {
  $('.input-txt, .area-txt').focus(function (e) {
    $(this).parent().removeClass("show__error");
  });
}

// Video end Listener
$('video').on('ended', function () {
  if ($(this).parent().hasClass('video__core')) {
    // Video has video__coe
    $('.playing').removeClass('playing');
    openPopup('.get-core');
  }
});

// Toggle Video
$(document).on('click', '.poster-video', function () {
  if ($(this).parent().hasClass('playing')) {
    $(this).parent().removeClass('playing');
    $(this).parent().find('video')[0].pause();
  } else {
    if ($('.playing').length) {
      $('.playing video')[0].pause();
      $('.playing').removeClass('playing');
    }
    $(this).parent().addClass('playing');
    $(this).parent().find('video')[0].muted = false;
    $(this).parent().find('video')[0].play();
  }
});

// Open select
$(document).on('click', '.select__header', function (e) {
  var box = $(this).parent();
  if (box.hasClass('select__open')) {
    box.removeClass('select__open');
  } else {
    $('.select').removeClass('select__open');
    box.addClass('select__open');
  }
});

// Selected item
$(document).on('click', '.select__box li', function (e) {
  var that = $(this);
  var box = $(this).parent().parent().parent();
  var target = $(this).attr('data-value');
  if (target == '0') {
    box.removeClass('not-default');
  } else {
    box.addClass('not-default');
  }
  if (!that.hasClass('selected')) {
    box.find('li').removeClass('selected');
    that.addClass('selected');
    box.removeClass('select__open');
    box.find('.select__header span').html(that.text());


    // Check has shortGalley class --> load data for gallery
    if (box.hasClass('shortGalley')) {
      if (loading) {
        loading = false;
        var url = 'story-gallery-data.html';
        loadGalleryByCate(url);
      }
    }

  }

});


//Close any Tooltip when click out
$(document).on('click touchstart', function (event) {
  if ($(".select").has(event.target).length == 0 && !$(".select").is(event.target)) {
    $(".select").removeClass("select__open");
  }
});


// NiceScroll T&C
function scrollBox(box) {
  //touchbehavior:true,
  if ($('.scroll-box').length) {
    $(box).find('.scroll-box').niceScroll({
      autohidemode: false,
      horizrailenabled: false,
      cursorborder: "0 solid rgba(255,255,255,0)",
      cursorwidth: "6px",
      cursorcolor: "#EDEDED",
      background: "transparent",
    });
  }

}

// Open T&C Popup
$('.openTnc').click(function () {
  openPopup('.popup__share--story');
});


// Open Story Popup
$('#openStory, #tncNext').click(function () {
  openPopup('.popup-upload');
  scrollBox('.popup-upload');
});


// Share and Open Thank Popup
$('#btnShare').click(function () {
  openPopup('.popup-thank');
});

// Open Campaign Popup Infomation
$(document).on('click', '.campaign_tnc', function () {
  openPopup('.popup-tnc__campaign');
  scrollBox('.popup-tnc__campaign');
});


// Show Popup Recive Gift
$(document).on('click', '.tab-body__lucky .btn, .tab-body__market .btn', function () {
  var value = $(this).attr('data-value');
  $('.receive-gift .message-value').text(value);
  openPopup('.receive-gift');
});


// Show Popup Logout
$(document).on('click', '.logout-btn', function () {
  openPopup('.logout');
});


// Register and show Popup register success
$(document).on('click', '#registerBut', function () {
  openPopup('.register-success');
});


// Close All Popup
$('.popup-close, .overlay-pop, .close-popup_onpage').click(function () {
  closePopup();
});



// Load Member info demo
function loadMemberPopup(url) {
  $.ajax({
    type: 'GET',
    url: url,
    success: function (data) {
      loading = true;
      $('#storyDetail').html(data);
      openPopup('.popup-story');
    }
  });
}

// Open Story Popup show member info
$(document).on('click', '.card .btn', function () {
  if (loading) {
    loading = false;
    var url = $(this).attr('data-href');
    loadMemberPopup(url);
  }
});

// Open Story Popup show member info on mobile
$(document).on('click', '.card', function () {
  if (window.innerWidth <= 1100) {
    if (loading) {
      console.log('dadada');
      loading = false;
      var url = $(this).attr('data-href');
      loadMemberPopup(url);
    }
  }
});


// Load More Gallery
function loadMoreGallery(url) {
  $.ajax({
    type: 'GET',
    url: url,
    success: function (data) {
      loading = true;
      gallerySwipe.appendSlide(data);
      gallerySwipe.update();
      setTimeout(function () {
        onScroll();
      }, 100);
    }
  });
}


// Load Gallery By Category
function loadGalleryByCate(url) {
  $.ajax({
    type: 'GET',
    url: url,
    success: function (data) {
      loading = true;
      $('.gallery-results .swiper-slide').remove();
      gallerySwipe.appendSlide(data);
      gallerySwipe.update();
      setTimeout(function () {
        onScroll();
      }, 100);
    }
  });
}

// Load more data gallery
$(document).on('click', '#loadMoreGellery', function () {
  if (loading) {
    loading = false;
    var url = 'story-gallery-data.html';
    loadMoreGallery(url);
  }
});



// shareBut event
$(document).on('click', '#shareBut', function () {
  console.log('Share click');
});

// favoriteBut event
$(document).on('click', '#favoriteBut', function () {
  console.log('Favorite click');
});


// Tab event
$(document).on('click', '.tab-header li', function () {
  if (!$(this).hasClass('current')) {
    var tab = $(this).attr('data-tab');
    $('.tab-header li.current, .tab-body.current').removeClass('current');
    $(this).addClass('current');
    $('.tab-body[data-tab=' + tab + ']').addClass('current');
  }
});



// Function Copy text
function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}

// Open tooltip
$(document).on('click', '.referral-help', function () {
  if ($(this).hasClass('show__tooltip')) {
    $(this).removeClass('show__tooltip')
  } else {
    $(this).addClass('show__tooltip');
  }
});

// Show popup Leave Page when in account module
if ($('.account-nav').length) {
  $('.nav li a, .logo a').click(function (event) {
    event.preventDefault();
    var url = $(this).attr('href');
    console.log(url);
    $('#targetPage').attr('href', url);
    openPopup('.leave-page');

  });
  if ($('body').attr('data-page') === 'thong-tin-ca-nhan') {
    openPopup('.select__register');

  }
}

function numberInput(byThis) {
  $(byThis).val($(byThis).val().replace(/[^0-9]/g, ''));
}

$(document).on('input', '.otp__list input', function () {
  numberInput(this);
  if ($(this).val().length == this.maxLength) {
    $(this).next('input').focus();
  }
});



// Show Popup Frame Avatar Download
$(document).on('click', '.nav-avatar', function () {
  document.querySelector('.nav__but').click();
  openPopup('.frame-avatar');
});

// Show Popup T & C Falling Game
$(document).on('click', '.open-falling', function () {
  openPopup('.popup-tnc__game');
  scrollBox('.popup-tnc__game');
});

// Open Campaign Popup T & C SonDoong
$(document).on('click', '.campaign_sondoong', function () {
  openPopup('.popup-tnc__sondoong');
  scrollBox('.popup-tnc__sondoong');
});

// Open Record SonDoong
$(document).on('click', '.record_info', function () {
  openPopup('.record-info');
});

// Open Record SonDoong
$(document).on('click', '.confirm_tree', function () {
  openPopup('.confirm-tree');
});


// Open Campaign Popup T & C SanCuLy
$(document).on('click', '.campaign_sanculy', function () {
  openPopup('.popup-tnc__sanculy');
  scrollBox('.popup-tnc__sanculy');
});


// Open Popup Confirm Gift
$(document).on('click', '.voucher-item .btn', function () {
  openPopup('.gift-confirm');
});

// Open Popup Success Gift
$(document).on('click', '.btn-confirm__gift', function () {
  openPopup('.gift-success');
  scrollBox('.gift-success');
});

// Open Popup Success Gift
$(document).on('click', '.btn-confirm__gift-form', function () {
  openPopup('.popup__info-voucher');
});

// Open Popup Core table Popup T&C
$(document).on('click', '.btn-core__table', function () {
  openPopup('.popup-tnc__core');
  scrollBox('.popup-tnc__core');
});

// Open Popup Lucky Popup T&C
$(document).on('click', '.btn-lucky__table', function () {
  openPopup('.popup-tnc__lucky');
  scrollBox('.popup-tnc__lucky');
});





// Validate Checkbox

// Open Popup Lucky Popup T&C
$(document).on('click', '#chk_agree', function () {
  if ($(this).is(":checked")) {
    $('.btn__check').prop('disabled', false);
  } else {
    $('.btn__check').prop('disabled', true);
  }
});


// Game Agree Valid
$(document).on('click', '.popup-game .input_check', function () {
  if ($(this).is(":checked")) {
    $('.popup-game .btn__check').prop('disabled', false);
  } else {
    $('.popup-game .btn__check').prop('disabled', true);
  }
});

// Show Popup T & C Song Hanh
$(document).on('click', '.open__tnc-songhanh', function () {
  openPopup('.popup-tnc__songhanh');
  scrollBox('.popup-tnc__songhanh');
});

// Close Popup T & C Falling Game
$(document).on('click', '.close__tnc-songhanh', function () {
  closePopup();
});


// Open Popup sức khoẻ
$(document).on('click', '.open-popup__suckhoe', function (e) {
  openPopup('.popup-message__suckhoe');
});

// Open Popup tnc Voucher
// $(document).on('click', '.greeting-list--vouchertnc', function (e) {
//   openPopup('.tnc__popup--voucher');
// });

// Open Popup Recruitment Exchange
$(document).on('click', '.open__popup-recruitment--exchange', function (e) {
  openPopup('.popup-message__recruitment--exchange');
});

// Open Popup doc quyen toi quan tam
$(document).on('click', '.js__open-popup-takecare', function (e) {
  openPopup('.popup-message__takecare');
});


// Page Ready
(function () {
  // Remove show__error
  inputHolder();

  // openPopup('.popup-game');
  //scrollBox('.popup-game');

  // Ẩn nút "Tôi Tham Gia" ở page son-doong vào ngày 27/2
  var day = (new Date().getTime() >= Date.parse('27 Feb 2022 00:00:00'));
  if (day) {
    $('.record_info').addClass('hide');
  }

})();




// NHON CODE QUIZ DOC QUYEN LA
var questionIndex = 0;
var listFaq = [
  {
    'serial': 1,
    'question': 'Trở thành Tư vấn Tài chính Công nghệ của AIA, thu nhập dự trù của chị Hạnh là bao nhiêu một năm?',
    'answer': [
      {
        'reply': '500 triệu/năm',
        'result': 'false'
      },
      {
        'reply': '800 triệu/năm',
        'result': 'false'
      },
      {
        'reply': '1 tỷ/năm (câu đúng)',
        'result': 'true'
      },
    ],
  },
  {
    'serial': 2,
    'question': 'Top 5% Chuyên viên Tư vấn Tài chính hàng đầu Thế giới, theo bạn chị Hạnh đang nhắc đến danh hiệu danh giá nào? ',
    'answer': [
      {
        'reply': 'MDRT – Thành viên Bàn tròn Triệu đô',
        'result': 'true'
      },
      {
        'reply': 'MTRD – Tư vấn viên xuất sắc Thế giới',
        'result': 'false'
      },
      {
        'reply': 'MDRT – Thành viên Bàn tròn Tỷ đô',
        'result': 'false'
      },
    ],
  },
]

function renderFAQ(obj) {
  var title = obj.question;
  var numberQuestion = obj.serial;
  var currentQuestion = listFaq[questionIndex].answer;
  var count = 1;
  $('.quiz-answers .quiz__anwser-txt').html('');

  currentQuestion.forEach(el => {
    var listReply = el.reply;
    $('.quiz-answers li:nth-child(' + count + ') .quiz__anwser-txt').html(listReply);
    count++;
  });

  $('.qestion-title').text(title);
  $('#quizIndex').text(numberQuestion);
}

$(document).on('click', '#nextQuiz', function () {
  $('.quiz__bot .buts').addClass('no-action');
  $('.quiz-answers li').removeClass('active');
  if (questionIndex >= listFaq.length - 1) {
    $('.quiz__bot .buts').addClass('no-action');
    $('.quiz__box').addClass('not_play');
    return false;
  } else {
    questionIndex++;
    renderFAQ(listFaq[questionIndex]);
    return false;
  }
});

$(document).on('click', '.quiz-answers li', function () {
  $('.quiz-answers li').removeClass('active');
  $(this).addClass('active');
  $('.quiz__bot .buts').removeClass('no-action');
});

$(document).on('click', '.open-popup__game--boothquiz', function () {
  openPopup('.popup-tnc__gamequiz');
  scrollBox('.popup-tnc__gamequiz');
});
$(document).on('click', '#playQuiz', function () {
  questionIndex = 0;
  renderFAQ(listFaq[questionIndex]);
  $('.quiz__box').removeClass('not_play');
  closePopup();
});



// Open Popup booth
$(document).on('click', '.post, .post_mash', function () {
  var id = $(this).attr('data-id');
  $('.booth-pic').removeClass('active');
  $('.booth-pic[data-id=' + id + ']').addClass('active');
  openPopup('.popup-booth');
});


// popup voucher
$(document).on('click', '.js__popup--tnc-voucher-canifa', function () {
  openPopup('.popup__tnc--voucher-canifa');
  scrollBox('.popup__tnc--voucher-canifa');
});

$(document).on('click', '.js__popup-tnc--voucher-vascara', function () {
  openPopup('.popup__tnc--voucher-vascara');
  scrollBox('.popup__tnc--voucher-vascara');
});

$(document).on('click', '.js__popup-tnc--voucher-datphu', function () {
  openPopup('.popup__tnc--voucher-datphu');
  scrollBox('.popup__tnc--voucher-datphu');
});

$(document).on('click', '.js__popup-tnc--voucher-tasty', function () {
  openPopup('.popup__tnc--voucher-tasty');
  scrollBox('.popup__tnc--voucher-tasty');
});


