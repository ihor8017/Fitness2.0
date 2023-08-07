import Pristine from './vendor/pristine.min.js';
import phoneMask from './mask.js';

const LENGTH_PHONE_NUMBER = 11;
const NAME_PATTERN = /^[\sa-zA-Zа-яёА-Я\-]{1,20}$/i;
const formLesson = document.querySelector(".form-lesson");
const inputName = formLesson.querySelector(".form-lesson__name input");
const submitButton = formLesson.querySelector(".form-lesson__button");

const formValidate = () => {
  const pristine = new Pristine(formLesson, {
    classTo: 'form-lesson__input',
    errorTextParent: 'form-lesson__input',
    errorTextClass: 'form-lesson__input--errore',
  });

  const isValidName  = (value) => NAME_PATTERN.test(value) && (value.length <= 20);
  pristine.addValidator(inputName, isValidName, "неправильный формат или длина");

  formLesson.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid && phoneMask.masked.isComplete) {
      formLesson.reset();
    }
  });
}
export default formValidate;
