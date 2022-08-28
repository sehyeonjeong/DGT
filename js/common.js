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