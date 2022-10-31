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

  var swiper = new Swiper(".Profileswiper", {
    pagination: {
      el: ".swiper-pagination",
    },
  });

  var swiper = new Swiper(".ExploreSwiper", {
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