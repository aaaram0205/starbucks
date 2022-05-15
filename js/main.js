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

