const slider = () => {
  const heroSwiper = new Swiper('#heroSlider', {
    // direction: 'vertical',
    sped: 500,
    loop: true,
    pagination:  {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    effect: 'fade',
    pagination: {
      clickable: true,
      el: '.swiper-pagination',
    },
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    //   draggable: true,
    // },
    autoplay: {
      delay: 2500,
    }
  });
  const mostSelled = new Swiper('#mostSlider', {
    speed: 500,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      768: {
        slidesPerView: 4,
        spaceBetween: 16
      }
    }
  });
  
};

export default slider;