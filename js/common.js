// 내정보 toggle 팝업설정
$('html').on('click', '.my-data.login', function(){
    $('.my-data-menu').stop().fadeToggle();
});

// 내정보 타겟영역을 제외하고 클릭했을 시 팝업 숨김처리
$('body').on('click', function(e){ 
    e.preventDefault();
    var $tgPoint = $(e.target);
    var $popCallBtn = $tgPoint.hasClass('my-data')
    var $popArea = $tgPoint.hasClass('my-data-menu')
    
    if(!$popCallBtn&&!$popArea){
       $('.my-data-menu').fadeOut();
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

//gototop
$(document).on('click', '.gototop', function(){
    $("html, body").animate({scrollTop:0}, '100');
    return false;
});
$(window).scroll( function() {
    if ( $( this ).scrollTop() > 500 ) {$( '.gototop' ).fadeIn();} 
    else {$('.gototop').fadeOut();}
});
