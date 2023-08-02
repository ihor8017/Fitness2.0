const changeClass = function () {
  const slider = document.querySelector(".slider");
  const sliderWrapper = slider.querySelector(".slider__wrapper");
  const sliderSlides = slider.querySelectorAll(".slider__slide");
  const nextButton = document.querySelector(".slider-navigation__button-next");
  const prevButton = document.querySelector(".slider-navigation__button-prev");
  const navigation = document.querySelector(".trainers__slider-navigation");

  nextButton.style.display = "block";
  prevButton.style.display = "block";
  slider.classList.add("swiper")
  slider.classList.remove("slider");
  sliderWrapper.classList.add("swiper-wrapper");
  sliderWrapper.classList.remove("slider__wrapper");
  nextButton.classList.add("swiper__button-next");
  nextButton.classList.remove("slider-navigation__button-next");
  prevButton.classList.add("swiper__button-prev");
  prevButton.classList.remove("slider-navigation__button-prev");
  navigation.classList.add("swiper-navigation");
  navigation.classList.remove("trainers__slider-navigation");
  sliderSlides.forEach(element => {
    element.classList.add("swiper-slide");
    element.classList.remove("slider__slide");
  });

  const reviews = document.querySelector(".reviews__slider");
  const reviewsWrapper = reviews.querySelector(".reviews__slider-wrapper");
  const reviewsSlide = reviews.querySelectorAll(".reviews__slide");
  const reviewsNext = reviews.querySelector(".reviews__button-next");
  const reviewsPrev = reviews.querySelector(".reviews__button-prev");

  reviewsNext.style.display = "block";
  reviewsPrev.style.display = "block";
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
