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
        $(".search input").attr("placeholder", "도로명 주소 또는 지번 주소를 입력해주세요.(공동주택은  동 · 호수까지 입력)");
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

// 등기열람 주민등록번호 폼
$(".regnum input").click(function () {
    var chk = $(".regnum input").is(':checked')
    if(chk){$(".nums input").attr("disabled", false);
    $(".nums input").addClass('on')}   
    else{$(".nums input").attr("disabled", true);
    $(".nums input").removeClass('on')}
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

// 등기문자보내기 오픈
$(document).on('click', '.sms', function () {
    $('.reg-sms-modal-dim').css("display", "flex")
    .hide()
    .fadeIn();
    $('.reg-sms-modal').css("display", "flex")
    .hide()
    .fadeIn();
});

// 등기문자보내기 닫기
$(document).on('click', '.reg-sms-modal-close', function () {
    $('.reg-sms-modal-dim').fadeOut();
    $('.reg-sms-modal').fadeOut();
});

// 등기문자보내기 쉐도우 영역 클릭
$(document).on('click', '.reg-sms-modal-dim', function () {
    $('.reg-sms-modal-dim').fadeOut();
    $('.reg-sms-modal').fadeOut();
});

// 등기열람 경고창 오픈
$(document).on('click', '.reg-sms-modal-btn', function () {
    $('.reg-sms-modal-alert-dim').css("display", "flex")
    .hide()
    .fadeIn();
    $('.reg-sms-modal-alert').css("display", "flex")
    .hide()
    .fadeIn();
});

// 등기열람 경고창 닫기
$(document).on('click', '.reg-sms-modal-alert-close', function () {
    $('.reg-sms-modal-alert-dim').fadeOut();
    $('.reg-sms-modal-alert').fadeOut();
});

// 등기열람 경고창 쉐도우 영역 클릭
$(document).on('click', '.reg-sms-modal-alert-dim', function () {
    $('.reg-sms-modal-alert-dim').fadeOut();
    $('.reg-sms-modal-alert').fadeOut();
});

// 등기열람 조회중 로딩
window.onload = function() {
    setTimeout(() => {
        var btn1 = document.querySelectorAll('.registered-btn .btn1');
        for ( var i = 0; i < btn1.length; i++ ) {
            btn1[i].innerHTML = "등기부등본";
        };
        var btn2 = document.querySelectorAll('.registered-btn .btn2');
        for ( var i = 0; i < btn2.length; i++ ) {
            btn2[i].innerHTML = "건축물대장";
        };
        var btn3 = document.querySelectorAll('.registered-btn .btn3');
        for ( var i = 0; i < btn3.length; i++ ) {
            btn3[i].innerHTML = "토지대장";
        };
    }, 4000);
}

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

// 키워드 추가 및 수정 모달 오픈
$(document).on('click', '.keyword-btn .edit-keyword', function () {
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

// 키워드 수정 버튼 클릭
$(document).on('click', '.keyword-edit-list img', function () {
    $('.list-depth').hide();
    $(this).parent().find('.list-depth').css("display", "flex")
    .hide()
    .fadeIn();
});

// 등기열람삭제 모달 오픈
$(document).on('click', '.card-delete', function () {
    $('.delete-modal-alert-dim').css("display", "flex")
    .hide()
    .fadeIn();
    $('.delete-modal-alert').css("display", "flex")
    .hide()
    .fadeIn();
});

// 등기열람삭제 모달 닫기
$(document).on('click', '.delete-modal-alert-close', function () {
    $('.delete-modal-alert-dim').fadeOut();
    $('.delete-modal-alert').fadeOut();
});

// 등기열람삭제 모달 쉐도우 영역 클릭
$(document).on('click', '.delete-modal-alert-dim', function () {
    $('.delete-modal-alert-dim').fadeOut();
    $('.delete-modal-alert').fadeOut();
});

// 등기열람카드 삭제
$(document).on('click', '.alert-delete', function () {
    $('.registered-card:first-child').remove();
    $('.delete-modal-alert-dim').fadeOut();
    $('.delete-modal-alert').fadeOut();
});

// 키워드토글
$(document).on('click', '.keyword-add-btn button', function () {
    $(this).toggleClass('on main-blue');
    $(this).toggleClass('off');
});

// 마이페이지 테이블 탭
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

// 전자민원캐시 on/off
$(".minwon-cash input").click(function () {
    var chk = $(".minwon-cash input").is(':checked');
    var sn = $(".service-num").text();
    num1 = parseInt(sn.replace(/,/g , ''));
    var cn = $(".commission-num").text();
    num2 = parseInt(cn.replace(/,/g , ''));
    if(chk){
        $(".minwon-label").addClass('on');
        $(".commission-num").addClass('on');
        $(".total-num").addClass('on')
        const numberWithCommas  = (x) => {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        document.querySelector('.total-num').innerText = numberWithCommas( num1 );
    }else{
        $(".minwon-label").removeClass('on');
        $(".commission-num").removeClass('on');
        $(".total-num").removeClass('on')
        const numberWithCommas  = (x) => {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        document.querySelector('.total-num').innerText = numberWithCommas( num1 + num2 );
    };
});

// 등기열람 충전 가격변경
$('.ticket-select-list input').click(function () {
    var cn = $(".commission-num");
    var sn = $(".service-num");
    var tn = $(".total-num");
    var tn1 = $(".total-num.on");
    if(ct.ticketcount.value == 500){
        cn.text('350,000');
        sn.text('150,000');
        tn.text('400,000');
        tn1.text('150,000');
    }else if(ct.ticketcount.value == 100){
        cn.text('70,000');
        sn.text('30,000');
        tn.text('100,000');
        tn1.text('30,000');
    }else if(ct.ticketcount.value == 30){
        cn.text('21,000');
        sn.text('12,000');
        tn.text('33,000');
        tn1.text('12,000');
    }else if(ct.ticketcount.value == 10){
        cn.text('7,000');
        sn.text('6,000');
        tn.text('13,000');
        tn1.text('6,000');
    }else if(ct.ticketcount.value == 1){
        cn.text('700');
        sn.text('800');
        tn.text('1,500');
        tn1.text('800');
    }
});

// 등기열람 도큐먼트 on/off
$(document).on('click', '.modal-docu-opt-cont label', function () {
    $(this).parent().toggleClass('on');
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

// 회원탈퇴 모달 오픈
$(document).on('click', '.profile-btn .resignation', function () {
    $('.secession-modal-alert-dim').css("display", "flex")
    .hide()
    .fadeIn();
    $('.secession-modal-alert').css("display", "flex")
    .hide()
    .fadeIn();
});

// 회원탈퇴 모달 닫기
$(document).on('click', '.secession-modal-alert-close', function () {
    $('.secession-modal-alert-dim').fadeOut();
    $('.secession-modal-alert').fadeOut();
});

// 회원탈퇴 모달 쉐도우 영역 클릭
$(document).on('click', '.secession-modal-alert-dim', function () {
    $('.secession-modal-alert-dim').fadeOut();
    $('.secession-modal-alert').fadeOut();
});

// 회원탈퇴 재확인 모달 오픈
$(document).on('click', '.alert-secession', function () {
    $('.secession-modal-alert-re-dim').css("display", "flex")
    .hide()
    .fadeIn();
    $('.secession-modal-alert-re').css("display", "flex")
    .hide()
    .fadeIn();
});

// 회원탈퇴 재확인 모달 닫기
$(document).on('click', '.secession-modal-alert-re-close', function () {
    $('.secession-modal-alert-re-dim').fadeOut();
    $('.secession-modal-alert-re').fadeOut();
});

// 회원탈퇴 재확인 모달 쉐도우 영역 클릭
$(document).on('click', '.secession-modal-alert-re-dim', function () {
    $('.secession-modal-alert-re-dim').fadeOut();
    $('.secession-modal-alert-re').fadeOut();
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
$(document).on('click', '.minwoncash-modal-close', function () {
    $('.minwoncash-modal-dim').fadeOut();
    $('.minwoncash-modal').fadeOut();
});
$(document).on('click', '.minwoncash-btn button', function () {
    $('.minwoncash-modal-dim').fadeOut();
    $('.minwoncash-modal').fadeOut();
    var value1 = $('#mw-number1').val();
    var value2 = $('#mw-number2').val();
    $('.cash-card dl dd').text(value1+'-'+value2);
    $('.modify').text('변경');
    $('.pw-cert').removeClass('on').text('인증하기');
});

// 전자민원캐시 모달 쉐도우 영역 클릭
$(document).on('click', '.minwoncash-modal-dim', function () {
    $('.minwoncash-modal-dim').fadeOut();
    $('.minwoncash-modal').fadeOut();
});

// 전자민원캐시 인증
$(document).on('click', '.pw-cert', function () {
    $(this).addClass('on').text('인증완료');
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

// 비밀번호 찾기 안내창 오픈
$(document).on('click', '.findpw-btn button', function () {
    $('.findpw-modal-alert-dim').css("display", "flex")
    .hide()
    .fadeIn();
    $('.findpw-modal-alert').css("display", "flex")
    .hide()
    .fadeIn();

    return false;
});

// 비밀번호 찾기 안내창 닫기
$(document).on('click', '.findpw-modal-alert-close, .alert-failed', function () {
    $('.findpw-modal-alert-dim').fadeOut();
    $('.findpw-modal-alert').fadeOut();
});

// 비밀번호 찾기 안내창 쉐도우 영역 클릭
$(document).on('click', '.findpw-modal-alert-dim', function () {
    $('.findpw-modal-alert-dim').fadeOut();
    $('.findpw-modal-alert').fadeOut();
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

//열람권충전 링크
function hashHandler() {
    if(typeof window.location.hash != "undefined" && window.location.hash == "#ticket"){
        document.getElementsByClassName('ticket-modal')[0].style.display = "flex";
        document.getElementsByClassName('ticket-modal-dim')[0].style.display = "flex";
    }    
}

hashHandler();

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

document.querySelectorAll("select").forEach(select => {
    select.addEventListener("invalid", () => {
    // 검증 후 폼 요소에 was-validated 클래스로 표시해 둔다
    document.forms[0].classList.add("invalid-form")
    })

    select.addEventListener("invalid", e => {
        // 브라우져 툴팁 숨김
        e.preventDefault()
    });
})