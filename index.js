const swiper = new Swiper('.swiper-contianer', {
   slidesOffsetBefore: 16,
   slidesPerView: 1.3,
   spaceBetween: 32,
   slidesOffsetAfter: 16,
   centeredSlidesBounds: true, // Ограничение, чтобы активный слайд не выходил за границы



  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    
  },


});