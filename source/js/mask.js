import IMask from './vendor/imask.js';
let phoneInput = document.querySelector(".form-lesson__phone input");
const phoneMask = new IMask(phoneInput, {
  mask: "0-000-000-00-00",
});
export default phoneMask;
