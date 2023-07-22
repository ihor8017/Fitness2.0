/* в этот файл добавляет скрипты*/
import playVideo from "./video.js";
import { showPlan } from "./show-plans.js";
import swiper from "./slider.js";
import swiperReviews from "./slider.js";
import {initTabs} from "./vendor/init-tabs.js";
import {initAccordions} from './vendor/init-accordion.js';
import formValidate from "./validate.js";


playVideo();
showPlan();
formValidate();
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
