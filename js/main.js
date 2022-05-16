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
    } else {
        //배지 보이기
       // badgeEl.style.display = "block";
    }
},300));
