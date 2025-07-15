  window.addEventListener('load', function () {
    const swiper = new Swiper('.swiper-home', {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 30,
      loop: false,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      breakpoints: {
        0: { slidesPerView: 1, slidesPerGroup: 1 },
        768: { slidesPerView: 2, slidesPerGroup: 2 },
        992: { slidesPerView: 4, slidesPerGroup: 4 }
      }
    });
  });