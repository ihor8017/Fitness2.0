/* в этот файл добавляет скрипты*/
import playVideo from "./video.js";
import { renderPlan } from "./render-plans.js";
import swiper from "./vendor/slider.js";
import swiperReviews from "./vendor/slider.js";
import {initTabs} from "./vendor/init-tabs.js";
import {initAccordions} from './vendor/init-accordion.js';
import scrollPage from "./scroll.js";
playVideo();
renderPlan();
scrollPage();
swiper;
swiperReviews;

window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    initTabs();
  });
});

window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    initAccordions();
  });
});
