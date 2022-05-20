const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

// input영역만이 아닌 .search를 클릭해도 input이 focus되게.
searchEl.addEventListener ('click', function (){
    searchInputEl.focus ();
});


//input focus되면
searchInputEl.addEventListener ('focus', function(){
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder','통합검색');
});


//input focus 해제되면
searchInputEl.addEventListener ('blur', function(){
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder','');
});


// 함수가 스크롤 될때마다 함수가 실행되는게 성능을 떨어뜨림. 스크롤 될 때마다 실행되는 함수를 외부에서 가져오는 'js라이브러리'로 제어 (lodash.js cdn)
//_.throttle (함수, 시간): 스크롤될때 실행되는 함수의 개수를 일정시간동안에 한번씩만 실행되도록 제한하는 메서드.

//js 애니메이션 라이브러리 gsap: gsap.to (처리할 요소, 지속시간, 옵션);

const badgeEl = document.querySelector('header .badges');

window.addEventListener ('scroll', _.throttle(function(){
    if (window.scrollY > 500) {
        //배지 숨기기
        //badgeEl.style.display = "none";
        //badgeEl.style.opacity = "0.3";  왜 이건 안쓰지? 라이브러리 소개위해서?
        gsap.to (badgeEl, .6, {  //객체
            opacity: 0,
            display: 'none'  // 문자데이터
        });
    } else {
        //배지 보이기
       // badgeEl.style.display = "block";
       gsap.to (badgeEl, .1, {
            opacity: 1,
            display: 'block' 
            
        });
    }
},300));


//VISUAL > 제품 이미지 순차적으로 나타나게 하기
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach (function (fadeEl, index) {
    gsap.to (fadeEl, 1, {
        delay: (index + 1) * 0.7,  //0, 0.7, 1.4, 2.1 ....
        opacity: 1
    })
});


// new Swiper ('인수', 옵션)
new Swiper ('.notice-line .swiper', {
    direction: 'vertical',
    autoplay: true,
    loop: true
});

new Swiper ('.promotion .swiper', {
    slidesPerView : 3,  //한 번에 보여줄 슬라이드 갯수
    spaceBetween: 10,  // 슬라이드 사이 여백
    centeredSlides: true,  //1번슬라이드가 가운데 보이기
    loop: true,
    autoplay: {
        delay: 5000
    },
    pagination: {
        el: '.promotion .swiper-pagination',  //페이지 번호 요소 선택자
        clickable: true  //사용자의 페이지번호 요소 제어가능여부
    },
    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
    }
});


const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function(){
    isHidePromotion = !isHidePromotion;
    if(isHidePromotion) {
        //숨김처리
        promotionEl.classList.add('hide');
    } else {
        //보임처리
        promotionEl.classList.remove('hide');   
    }
});

//특정값을 지속적으로 반대로 만들어줌(true면 false로, false면 true로)
