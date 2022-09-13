// 내정보 toggle 팝업설정
$('html').on('click', '.my-data.login', function(){
    $('.my-data-menu').stop().fadeToggle();
});

// 내정보 타겟영역을 제외하고 클릭했을 시 팝업 숨김처리
$('body').on('click', function(e){ 
    var $tgPoint = $(e.target);
    var $popCallBtn = $tgPoint.hasClass('my-data')
    var $popArea = $tgPoint.hasClass('my-data-menu')
    
    if(!$popCallBtn&&!$popArea){
       $('.my-data-menu').fadeOut();
    }
});

// 화면 사이즈 변환시 nav 초기화
$(window).resize(function(){ 
    if (window.innerWidth < 600) { // 디바이스 크기가 600미만일때  
        $('.my-data-menu').removeAttr('style'); 
    } else { // 디바이스 크기가 600이상일때  
        $('.nav-btn, .m-nav-wrap, .m-nav-dim').removeAttr('style')
    }
}).resize(); 

$(window).resize(function(){ 
    if (window.innerWidth < 960) {  // 디바이스 크기가 960미만일때 
        $(".search input").attr("placeholder", "주소를 검색하세요.");
    } else {
        $(".search input").attr("placeholder", "주소를 검색해 원하는 등기를 쉽고 빠르게 열람하세요.");
    };
}).resize(); 

// 모바일 메뉴버튼 클릭
$(document).on('click', '.nav-btn', function () {
    gsap.to('.m-nav-wrap', {duration: 0.3, right: 0});
    $('.nav-btn').fadeOut();
    $('.m-nav-dim').fadeIn();
});

// 모바일 메뉴버튼 닫기
$(document).on('click', '.nav-btn-in', function () {
    gsap.to('.m-nav-wrap', {duration: 0.3, right: -280});
    $('.nav-btn').fadeIn();
    $('.m-nav-dim').fadeOut();
});

// 모바일 쉐도우 영역 클릭
$(document).on('click', '.m-nav-dim', function () {
    gsap.to('.m-nav-wrap', {duration: 0.3, right: -280});
    $('.nav-btn').fadeIn();
    $('.m-nav-dim').fadeOut();
});

// 등기열람 요청 모달 오픈
$(document).on('click', '.request-btn', function () {
    $('.result-modal-dim').css("display", "flex")
    .hide()
    .fadeIn();
    $('.result-modal').css("display", "flex")
    .hide()
    .fadeIn();
});

// 등기열람 요청 모달 닫기
$(document).on('click', '.result-modal-close', function () {
    $('.result-modal-dim').fadeOut();
    $('.result-modal').fadeOut();
});

// 등기열람 요청 모달 쉐도우 영역 클릭
$(document).on('click', '.result-modal-dim', function () {
    $('.result-modal-dim').fadeOut();
    $('.result-modal').fadeOut();
});

// 등기열람 경고창 오픈
$(document).on('click', '.modal-request-btn', function () {
    $('.result-modal-alert-dim').css("display", "flex")
    .hide()
    .fadeIn();
    $('.result-modal-alert').css("display", "flex")
    .hide()
    .fadeIn();
});

// 등기열람 경고창 닫기
$(document).on('click', '.result-modal-alert-close', function () {
    $('.result-modal-alert-dim').fadeOut();
    $('.result-modal-alert').fadeOut();
});

// 등기열람 경고창 쉐도우 영역 클릭
$(document).on('click', '.result-modal-alert-dim', function () {
    $('.result-modal-alert-dim').fadeOut();
    $('.result-modal-alert').fadeOut();
});

// 체크박스가 체크되면 버튼 활성화 되게 만들기
    
$('.agree-form input[type="checkbox"]').click(function(){
    var tmpp = $(this).prop('checked'); 
    // this를 사용하여 클릭한 checkbox 가 체크되도록 설정
    if(tmpp){
        $(".agree-btn button").addClass('main-blue-bg-btn').removeClass('lightgray-bg-btn').attr("onclick","window.open('./enter-info.html','_self')").prop("disabled",false);
    }
    else{
        $(".agree-btn button").removeClass('main-blue-bg-btn').addClass('lightgray-bg-btn').removeAttr("onclick").prop("disabled",true);
    }
});

//회원가입폼
$('.phone-cert').click(function(){
    $('.join-content').addClass('cert-on');
    $('.join-content div, .join-content label').removeClass('cert-none');
    $('.join-content .join-phone-form p').hide();
    $('.join-content .join-phone-form input').attr('readonly',true);
    $(".phone-cert").text("인증완료");
    $(".join-btn button").addClass('main-blue-bg-btn').removeClass('lightgray-bg-btn').prop("disabled",false);
});

document.querySelectorAll("input").forEach(input => {
    input.addEventListener("invalid", () => {
    // 검증 후 폼 요소에 was-validated 클래스로 표시해 둔다
    document.forms[0].classList.add("invalid-form")
    })

    input.addEventListener("invalid", e => {
        // 브라우져 툴팁 숨김
        e.preventDefault()
    });
})

//폰번호 입력
$('#phone').keydown(function(event) {
    var key = event.charCode || event.keyCode || 0;
    $text = $(this);
    if (key !== 8 && key !== 9) {
        if ($text.val().length === 3) {
            $text.val($text.val() + '-');
        }
        if ($text.val().length === 8) {
            $text.val($text.val() + '-');
        }
    }

    return (key == 8 || key == 9 || key == 46 || (key >= 48 && key <= 57) || (key >= 96 && key <= 105));          
});

// 회원가입 모달 오픈
$(document).on('click', '.join-btn', function () {
    $('.result-modal-alert-dim').css("display", "flex")
    .hide()
    .fadeIn();
    $('.result-modal-alert').css("display", "flex")
    .hide()
    .fadeIn();
});

// 키워드 추가 및 수정 모달 오픈
$(document).on('click', '.registered-wrap-keyword .edit-keyword', function () {
    $('.result-modal-alert-dim').css("display", "flex")
    .hide()
    .fadeIn();
    $('.result-modal-alert').css("display", "flex")
    .hide()
    .fadeIn();
});

//gototop
$(document).on('click', '.gototop', function(){
    $("html, body").animate({scrollTop:0}, '100');
    return false;
});
$(window).scroll( function() {
    if ( $( this ).scrollTop() > 500 ) {$( '.gototop' ).fadeIn();} 
    else {$('.gototop').fadeOut();}
});

function adjustHeight() {
    var textEle = $('textarea');
    textEle[0].style.height = 'auto';
    var textEleHeight = textEle.prop('scrollHeight');
    textEle.css('height', textEleHeight);
};

window.onresize = function(event) {
    adjustHeight(); 
};

adjustHeight(); 