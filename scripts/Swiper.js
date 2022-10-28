var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
        // when window width is <= 499px
        320: {
            slidesPerView: 1,
            spaceBetweenSlides: 50
        },
        // when window width is <= 999px
        999: {
            slidesPerView: 2,
            spaceBetweenSlides: 50
        }
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
  });


//   var swiper = new Swiper(".loginSwiper", {
 
//     spaceBetween: 30,
//     effect: "fade",
//     autoplay: {
//         delay: 2500,
//         disableOnInteraction: false,
//       },
//   });