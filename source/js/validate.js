import Pristine from './vendor/pristine.min.js';
const LENGTH_PHONE_NUMBER = 11;
const NAME_PATTERN = /^[a-zA-Zа-яёА-Я]{1,20}$/i;
//const submitButton = document.querySelector('.form-lesson__button');
const formLesson = document.querySelector(".form-lesson");
const inputName = formLesson.querySelector(".form-lesson__name input");
const inputPhone = formLesson.querySelector(".form-lesson__phone input");

const formValidate = () => {
  const pristine = new Pristine(formLesson, {
    classTo: 'form-lesson__name',
    errorTextParent: 'form-lesson__name',
    errorTextClass: 'form-lesson__name--errore',
  });

  // const pristinePhone = new Pristine(formLesson, {
  //   classTo: 'form-lesson__phone',
  //   errorTextParent: 'form-lesson__phone',
  //   errorTextClass: 'form-lesson__phone--errore',
  // });



  const isValidName  = (value) => NAME_PATTERN.test(value) && (value.length <= 20);
  const isValidNumber = (value) => value.length == LENGTH_PHONE_NUMBER && Number.isInteger(+value);
  pristine.addValidator(inputName, isValidName, "неправильный формат или длина");
  pristine.addValidator(inputPhone, isValidNumber, "неправильный номер");

  formLesson.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      console.log('Можно отправлять');
    } else {
      console.log('Форма невалидна');
    }
  });

}

export default formValidate;
