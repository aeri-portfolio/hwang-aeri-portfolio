document.getElementById('toggleVideo').addEventListener('click', function() {
    if (window.innerWidth > 899) {
    const header = document.querySelector('.header'); // 클래스 선택
    header.classList.toggle('shrink'); // shrink 클래스 토글

    // 헤더가 줄어들 때 스크롤 허용
    if (header.classList.contains('shrink')) {
        document.body.style.overflow = 'auto'; // 스크롤 허용
    } else {
        document.body.style.overflow = 'hidden'; // 스크롤 막기
    }
    }
});


window.addEventListener('load',()=>{
// window를 보고있다가 load가 되면

  const grid = new Isotope('section',{
   //배치할 요소를 감싸고 있는 부모 요소명 (article을 감싸고있는 부모section)
   itemSelector : 'article', //배치할 요소명
   columnWidth : 'article', //넓이값을 구할 요소명
   transitionDuration : '0.5s' // 화명 재배치시 요소가 움직이는 속도
  })

  const btns = document.querySelectorAll('main ul li');
  // 클릭할 모든 버튼 요소 변수에 저장 even odd all > btn안에 넣어라

  for(let el of btns){
    //버튼의 갯수만큼 반복을 돌면서
    el.addEventListener('click',e=>{
      //지켜보고 있다가 클릭이 들어오면
      e.preventDefault();
      //각 버튼에 클릭 이벤트 연결
      const sort = e.currentTarget.querySelector('a').getAttribute('href');
      //sort라는 변수에 클릭한 대상의 자식인 a 요소의 href 속성값 저장
      grid.arrange({
        filter:sort
        //옵션값으로 sort변수를 지정
      })

      // 'introduction' 클래스를 가진 article 요소를 선택합니다.
      const introductionArticle = document.querySelector('article.introduction');
      // 버튼의 href가 '.introduction'일 때만 보여줍니다.
      if (sort === '.introduction') {
        if (introductionArticle) {
          introductionArticle.style.display = 'block'; // 보여주기
        }
      } else {
        // 다른 버튼을 클릭했을 때는 숨깁니다.
        if (introductionArticle) {
          introductionArticle.style.display = 'none'; // 숨기기
        }
      }
      for(let el of btns){
        //다시 모든 버튼의 갯수만큼 반복을 돌다가
        el.classList.remove('on');
        //각 버튼의 클레스명 'on'을 제거해 비활성화
        //버튼을 누를때마다 STYLE바뀌는거 A 누르면 B,C사라지게 ~ 암튼..
      }
      e.currentTarget.classList.add('on');
      //클릭한 대상만 선택해서 클래스명 'on'을 추가해 활성해라
    })
  }
})



function showImage(source) {
    const cardnews = document.getElementById('cardnews');
    const info = document.getElementById('info');
    const solomov = document.getElementById('solomov');
    const webre = document.getElementById('webre');
    const cafe24 = document.getElementById('cafe24');
    const dunkin = document.getElementById('dunkin');
    const uxui = document.getElementById('uxui');
    const coffee = document.getElementById('coffee');
  
    //div 숨기기
    cardnews.style.display = 'none';
    info.style.display = 'none';
    solomov.style.display = 'none';
    webre.style.display = 'none';
    cafe24.style.display = 'none';
    dunkin.style.display = 'none';
    uxui.style.display = 'none';
    coffee.style.display = 'none';
  
    //클릭할때마다 보이게 적용
    if (source === 'info') {
        info.style.display = 'flex'; //info
    } else if (source === 'solomov') {
        solomov.style.display = 'flex'; //solomov 
    } else if (source === 'webre') {
        webre.style.display = 'flex'; //cafe24
    } else if (source === 'cafe24') {
        cafe24.style.display = 'flex'; //webre
    } else if (source === 'dunkin') {
        dunkin.style.display = 'flex'; //dunkin
    } else if (source === 'uxui') {
        uxui.style.display = 'flex'; //uxui
    } else if (source === 'coffee') {
        coffee.style.display = 'flex'; //coffee
    } else {
        cardnews.style.display = 'flex'; //카드뉴스
    }
  }
  
  function closeImage() {
    const cardnews = document.getElementById('cardnews');
    const info = document.getElementById('info');
    const solomov = document.getElementById('solomov');
    const webre = document.getElementById('webre');
    const cafe24 = document.getElementById('cafe24');
    const dunkin = document.getElementById('dunkin');
    const uxui = document.getElementById('uxui');
    const coffee = document.getElementById('coffee');
  
    cardnews.style.display = 'none'; // 카드뉴스 숨기기
    info.style.display = 'none'; // info 숨기기
    solomov.style.display = 'none'; // solomov 숨기기
    webre.style.display = 'none'; // webre 숨기기
    cafe24.style.display = 'none'; // cafe24 숨기기
    dunkin.style.display = 'none'; // cafe24 숨기기
    uxui.style.display = 'none'; // uxui 숨기기
    coffee.style.display = 'none'; // coffee 숨기기
  }


  document.addEventListener('dragstart', function(e) {
    e.preventDefault(); // 드래그 시작 이벤트 방지

});


