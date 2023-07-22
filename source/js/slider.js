import Swiper from './vendor/swiper-bundle.js';
import changeClass from "./change-class.js";
changeClass();
const swiper = new Swiper('.swiper', {
  loop: true,
  navigation: {
    nextEl: '.swiper__button-next',
    prevEl: '.swiper__button-prev',
  },
  // Responsive breakpoints
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }
})

const swiperReviews = new Swiper('.swiper-reviews', {
  loop: false,
  navigation: {
    nextEl: '.reviews__button-next',
    prevEl: '.reviews__button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    1200: {
      slidesPerView: 1,
      spaceBetween: 40
    }
  }
})

export default {swiper, swiperReviews} ;
