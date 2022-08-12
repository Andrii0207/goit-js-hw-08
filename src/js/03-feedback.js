import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const inputRef = document.querySelector('input');
const messageRef = document.querySelector('textarea');

formRef.addEventListener('input', throttle(onFormDataInput, 500));
formRef.addEventListener('submit', onFormSubmit);

let LOCALSTORAGE_KEY = 'feedback-form-state';
let formData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || {};

onInitForm();

function onFormDataInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.target.elements;
  const email = formElements.email.value;
  const message = formElements.message.value;

  if (email === '' || message === '') {
    alert('Please fill in all fields of the form!');
    return;
  }

  console.log('email:', event.target.email.value);
  console.log('message:', event.target.message.value);
  event.target.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

function onInitForm() {
  let savedMessage = localStorage.getItem(LOCALSTORAGE_KEY);

  if (savedMessage) {
    savedMessage = JSON.parse(savedMessage);
    console.log(savedMessage);
    console.log('email:', savedMessage.email);
    console.log('message:', savedMessage.message);

    inputRef.value = savedMessage.email || '';
    messageRef.value = savedMessage.message || '';
  }
}
