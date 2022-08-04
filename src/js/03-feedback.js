// inport '..'

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
  inputMessage: document.querySelector('textarea'),
  submitButton: document.querySelector('button'),
};
// console.log(refs);

// const LOCALSTORAGE_KEYS = {};

refs.form.addEventListener('submit', onFormSubmit);
refs.inputEmail.addEventListener('input', onEmailInput);
refs.inputMessage.addEventListener('input', onInputMessage);

getDataLocalStorage();

const LOCALSTORAGE_KEY = 'feedback-form-state';

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

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();

  console.log('Отправляем форму');
}

function onEmailInput(e) {
  const inputEmail = e.currentTarget.value;
  localStorage.setItem(LOCALSTORAGE_KEY, inputEmail);
  //   console.log(inputEmail);
}

function onInputMessage(e) {
  const inputMessage = e.currentTarget.value;
  localStorage.setItem(LOCALSTORAGE_KEY, inputMessage);
  //   console.log(inputMessage);
}

function getDataLocalStorage() {
  const savedMessage = localStorage.getItem('LOCALSTORAGE_KEY');
  console.log(savedMessage);
  if (savedMessage) {
    console.log(savedMessage);
  }
}
