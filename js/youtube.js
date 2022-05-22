 // 2. This code loads the IFrame Player API code asynchronously.
 var tag = document.createElement('script');

 tag.src = "https://www.youtube.com/iframe_api";
 var firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

 // 3. This function creates an <iframe> (and YouTube player)
 //    after the API code downloads.
 function onYouTubeIframeAPIReady() {
   new YT.Player('player', {
     videoId: 'An6LvWQuj_8',  //최초 재생할 유튜브 영상 ID
     playerVars: {
         autoplay: true,  //자동 재생 유무
         loop: true,  // 반복 재생 유무, true쓸경우 아래 반복재생할 ID 명시해줘야함!
         playlist:  'An6LvWQuj_8'  //반복 재생할  유투브 영상 ID 목록
     },
     events : {
         onReady: function (event) {  //onReady라는 메소드가 실행되면 다음 함수를 실행하겠다.
            event.target.mute()  //음소거
         }
     }
   });
 }
