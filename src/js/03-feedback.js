import throttle from 'lodash.throttle';

// const form = document.querySelector('.feedback-form');
// console.log(form);
// const inputEmail = document.querySelector('input');
// console.log(inputEmail);
// const inputMessageForm = document.querySelector('textarea');
// console.log(inputMessageForm);
// const submitButton = document.querySelector('button');
// console.log(submitButton);

const refs = {
  form: document.querySelector('.feedback-form'),
  inputEmail: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
  submitButton: document.querySelector('button'),
};

refs.form.addEventListener('submit', onFormSubmit);
// refs.inputEmail.addEventListener('input', onEmailInput);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 1000));
refs.form.addEventListener('input', onFormInput);

const LOCALSTORAGE_KEY = 'feedback-form-state';

onTakeExistDataLocalStorage();

function onTextareaInput(event) {
  const message = event.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, message);
}

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  // localStorage.removeItem(LOCALSTORAGE_KEY);

  console.log('Отправляем форму');
}

function onFormInput(event) {
  // console.log(event.target.name);
  // console.log(event.target.value);
  const formData = {};
  formData[event.target.name] = event.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
  console.log(formData);
}

function onTakeExistDataLocalStorage() {
  const savedMessage = localStorage.getItem(LOCALSTORAGE_KEY);
  if (savedMessage) {
    console.log(savedMessage);
  }
}

// onGetDataLocalStorage();
// function onFormSubmit(event) {
//   event.preventDefault();
//   const formData = new FormData(refs.form);
//   //   console.log(formData);
//   formData.forEach((value, name) => console.log(value, name));
// }

// refs.form.addEventListener('change', evt => {
//   LOCALSTORAGE_KEYS[event.target.name] = event.target.value;
//   console.log(LOCALSTORAGE_KEYS);
//   localStorage.setItem('LOCALSTORAGE_KEYS', JSON.stringify(LOCALSTORAGE_KEYS));
// });

// function initForm() {
//   let getDataLocalStorage = localStorage.getItem(LOCALSTORAGE_KEYS);
//   if (getDataLocalStorage) {
//     getDataLocalStorage = JSON.parse(getDataLocalStorage);
//     console.log(getDataLocalStorage);
//   }
// }

// function onFormSubmit(e) {
//   e.preventDefault();
//   e.currentTarget.reset();

//   console.log('Отправляем форму');
// }

// function onFormData(e) {
//   e.preventDefault();
//   let existedData = localStorage.getItem(LOCALSTORAGE_KEY);
//   if (existedData) {
//     existedData = JSON.parse(existedData);
//   } else {
//     existedData = {};
//   }
//   existedData[e.target.name] = e.target.value;
//   localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(existedData));
// }

// function onEmailInput(e) {
//   const inputEmail = e.currentTarget.value;
//   localStorage.setItem(LOCALSTORAGE_KEY, inputEmail);
//   //   console.log(inputEmail);
// }

// function onInputMessage(e) {
//   const inputMessage = e.currentTarget.value;
//   localStorage.setItem(LOCALSTORAGE_KEY, inputMessage);
// }

// function getDataLocalStorage() {
//   const savedMessage = localStorage.getItem('LOCALSTORAGE_KEY');
//   console.log(savedMessage);
//   if (savedMessage) {
//     console.log(savedMessage);
//   }
// }
