import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const inputRef = document.querySelector('input');
const messageRef = document.querySelector('textarea');

formRef.addEventListener('input', throttle(onFormDataInput, 500));
formRef.addEventListener('submit', onFormSubmit);

let LOCALSTORAGE_KEY = 'feedback-form-state';

const formData = {};

onInitForm();

function onFormDataInput(event) {
  const message = event.target.value;
  const key = event.target.name;

  formData[key] = message;

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();

  event.target.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

function onInitForm() {
  let savedMessage = localStorage.getItem(LOCALSTORAGE_KEY);
  if (savedMessage) {
    savedMessage = JSON.parse(savedMessage);
    console.log(savedMessage);

    inputRef.textContent = savedMessage.email;
    messageRef.textContent = savedMessage.message;
  }
}
