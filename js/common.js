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

$('.search input').on('input', function(){
    if($('.search input').val()==''){

    }else{
        
    }
});

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

// 회원가입 검증
$(document).on('click', '.join-btn button', function () {
    if(fjrm.pw.value == ""){
        $('.join-content').addClass('invalid-form');
    }else if(fjrm.pwconfirm.value == ""){
        $('.join-content').addClass('invalid-form');
    }else if(fjrm.name.value == ""){
        $('.join-content').addClass('invalid-form');
    }else if(fjrm.email.value == ""){
        $('.join-content').addClass('invalid-form');
    } else{
        $('.result-modal-alert-dim').css("display", "flex")
        .hide()
        .fadeIn();
        $('.result-modal-alert').css("display", "flex")
        .hide()
        .fadeIn();
    }
});

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
// $(document).on('click', '.join-btn', function () {
//     $('.result-modal-alert-dim').css("display", "flex")
//     .hide()
//     .fadeIn();
//     $('.result-modal-alert').css("display", "flex")
//     .hide()
//     .fadeIn();
// });

// 키워드 추가 및 수정 모달 오픈
$(document).on('click', '.registered-wrap-keyword .edit-keyword', function () {
    $('.registered-modal-dim').css("display", "flex")
    .hide()
    .fadeIn();
    $('.registered-modal').css("display", "flex")
    .hide()
    .fadeIn();
});

// 키워드 추가 및 수정 모달 닫기
$(document).on('click', '.modal-agree-btn', function () {
    $('.registered-modal-dim').fadeOut();
    $('.registered-modal').fadeOut();
});

// 키워드 추가 및 수정 모달 쉐도우 영역 클릭
$(document).on('click', '.registered-modal-dim', function () {
    $('.registered-modal-dim').fadeOut();
    $('.registered-modal').fadeOut();
});

//키워드 수정 버튼 클릭
$(document).on('click', '.keyword-edit-list', function () {
    $('.list-depth').hide();
    $(this).find('.list-depth').css("display", "flex")
    .hide()
    .fadeIn();
});

//키워드 추가 버튼 클릭
$(document).on('click', '.keyword-btn .edit-keyword', function () {
    $('.keyword-add').hide();
    $(this).parent().find('.keyword-add').css("display", "flex")
    .hide()
    .fadeIn();
});

//키워드 추가 버튼 클릭 > 확인
$(document).on('click', '.keyword-add > button', function () {
    $('.keyword-add').fadeOut();
});

//키워드토글
$(document).on('click', '.keyword-add-btn button', function () {
    $(this).toggleClass('on main-blue');
    $(this).toggleClass('off');
});

//마이페이지 테이블 탭
$(document).on('click', '.wrap-tab .tab button', function () {
    var activeTab = $(this).attr('data-tab');
    $('.wrap-tab .tab button').removeClass('on');
    $('.table').removeClass('on');
    $(this).addClass('on');
    $('#' + activeTab).addClass('on');

});

// 등기열람 충전 모달 오픈
$(document).on('click', '.ticket-btn .buy', function () {
    $('.ticket-modal-dim').css("display", "flex")
    .hide()
    .fadeIn();
    $('.ticket-modal').css("display", "flex")
    .hide()
    .fadeIn();
});

// 등기열람 충전 모달 닫기
$(document).on('click', '.ticket-modal-close', function () {
    $('.ticket-modal-dim').fadeOut();
    $('.ticket-modal').fadeOut();
});

// 등기열람 충전 모달 쉐도우 영역 클릭
$(document).on('click', '.ticket-modal-dim', function () {
    $('.ticket-modal-dim').fadeOut();
    $('.ticket-modal').fadeOut();
});

// 결제실패 경고창 오픈
$(document).on('click', '.ticket-modal-btn button', function () {
    $('.ticket-modal-alert-dim').css("display", "flex")
    .hide()
    .fadeIn();
    $('.ticket-modal-alert').css("display", "flex")
    .hide()
    .fadeIn();

    return false;
});

// 결제실패 경고창 닫기
$(document).on('click', '.ticket-modal-alert-close, .alert-failed', function () {
    $('.ticket-modal-alert-dim').fadeOut();
    $('.ticket-modal-alert').fadeOut();
});

// 결제실패 경고창 쉐도우 영역 클릭
$(document).on('click', '.ticket-modal-alert-dim', function () {
    $('.ticket-modal-alert-dim').fadeOut();
    $('.ticket-modal-alert').fadeOut();
});

// 정보수정 모달 오픈
$(document).on('click', '.profile-btn .change', function () {
    $('.change-modal-dim').css("display", "flex")
    .hide()
    .fadeIn();
    $('.change-modal').css("display", "flex")
    .hide()
    .fadeIn();
});

// 정보수정 모달 닫기
$(document).on('click', '.change-modal-close, .change-btn button', function () {
    $('.change-modal-dim').fadeOut();
    $('.change-modal').fadeOut();
});

// 정보수정 모달 쉐도우 영역 클릭
$(document).on('click', '.change-modal-dim', function () {
    $('.change-modal-dim').fadeOut();
    $('.change-modal').fadeOut();
});

// 전자민원캐시 모달 오픈
$(document).on('click', '.cash-btn button ', function () {
    $('.minwoncash-modal-dim').css("display", "flex")
    .hide()
    .fadeIn();
    $('.minwoncash-modal').css("display", "flex")
    .hide()
    .fadeIn();
});

// 전자민원캐시 모달 닫기
$(document).on('click', '.minwoncash-modal-close, .minwoncash-btn button', function () {
    $('.minwoncash-modal-dim').fadeOut();
    $('.minwoncash-modal').fadeOut();
});

// 전자민원캐시 모달 쉐도우 영역 클릭
$(document).on('click', '.minwoncash-modal-dim', function () {
    $('.minwoncash-modal-dim').fadeOut();
    $('.minwoncash-modal').fadeOut();
});

// 전자민원캐시 인증
$(document).on('click', '.pw-cert', function () {
    $(this).addClass('on').text('인증완료');
    $('.cash-card dl dd').text('R7874659 - 2617');
    $('.modify').text('변경');
});

// 민원캐시 on/off
$(document).on('click', '.minwon-cash label', function () {
    $('.minwon-cash').toggleClass('on');
});

// 비밀번호 찾기 모달 오픈
$(document).on('click', '.pw-lose', function () {
    $('.findpw-modal-dim').css("display", "flex")
    .hide()
    .fadeIn();
    $('.findpw-modal').css("display", "flex")
    .hide()
    .fadeIn();
});

// 비밀번호 찾기 모달 닫기
$(document).on('click', '.findpw-modal-close', function () {
    $('.findpw-modal-dim').fadeOut();
    $('.findpw-modal').fadeOut();
});

// 비밀번호 찾기 모달 확인
$(document).on('click', '.findpw-btn button', function () {
    if(fprm.email.value == ""){
    }else{
        $('.findpw-modal-dim').fadeOut();
        $('.findpw-modal').fadeOut();
    }
});

// 비밀번호 찾기 모달 쉐도우 영역 클릭
$(document).on('click', '.findpw-modal-dim', function () {
    $('.findpw-modal-dim').fadeOut();
    $('.findpw-modal').fadeOut();
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