const changeClass = function () {
  const slider = document.querySelector(".slider");
  const sliderWrapper = slider.querySelector(".slider__wrapper");
  const sliderSlides = slider.querySelectorAll(".slider__slide");
  slider.classList.add("swiper")
  slider.classList.remove("slider");
  sliderWrapper.classList.add("swiper-wrapper");
  sliderWrapper.classList.remove("slider__wrapper");
  sliderSlides.forEach(element => {
    element.classList.add("swiper-slide");
    element.classList.remove("slider__slide");
  });

  const reviews = document.querySelector(".reviews__slider");
  const reviewsWrapper = reviews.querySelector(".reviews__slider-wrapper");
  const reviewsSlide = reviews.querySelectorAll(".reviews__slide");
  reviews.classList.add("swiper-reviews");
  reviews.classList.remove("reviews__slider");
  reviewsWrapper.classList.add("swiper-wrapper");
  reviewsWrapper.classList.remove("reviews__slider-wrapper");
  reviewsSlide.forEach(element => {
  element.classList.add("swiper-slide");
  element.classList.remove("reviews__slide");
  });
};

export default changeClass;
