/* в этот файл добавляет скрипты*/
import playVideo from "./video.js";
import { renderPlan } from "./render-plans.js";
import swiper from "./vendor/slider.js";
import {initTabs} from "./vendor/init-tabs.js";
import {initAccordions} from './vendor/init-accordion.js';
playVideo();
renderPlan();
swiper;

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
