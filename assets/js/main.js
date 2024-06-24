// sec01
gsap.to('.whale-sea img', {
  y: -100, // y축 방향으로 이동
  duration: 2, // 애니메이션 지속시간
  ease: 'power1.out',
  yoyo: true, // 애니메이션을 왕복
  repeat: -1, // 무한 반복
});





// sec02




var swiper = new Swiper('.sec02-slide', {
  slidesPerView: 1, // 한 번에 보여지는 슬라이드 개수를 1로 설정
  slidesPerGroup: 1, // 한 번에 그룹으로 묶는 슬라이드 개수를 1로 설정
  centeredSlides: true,
  loop: true, // 루프 모드 활성화
  effect: 'fade',
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var swiper = new Swiper('.sec02-slide2', {
  slidesPerView: 1, // 한 번에 보여지는 슬라이드 개수를 1로 설정
  slidesPerGroup: 1, // 한 번에 그룹으로 묶는 슬라이드 개수를 1로 설정
  centeredSlides: true,
  loop: true, // 루프 모드 활성화
  effect: 'fade',
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

