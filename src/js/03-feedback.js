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
    console.log('email:', savedMessage.email);
    console.log('message:', savedMessage.message);

    inputRef.value = savedMessage.email || '';
    messageRef.value = savedMessage.message || '';
  }
}

// import throttle from 'lodash.throttle';

// const formEl = document.querySelector('.feedback-form');
// formEl.addEventListener('input', throttle(onFormData, 500));
// formEl.addEventListener('submit', onSubmitForm);
// initForm();
// function onFormData(e) {
//   let existedData = localStorage.getItem('feedback-form-state');
//   if (existedData) {
//     existedData = JSON.parse(existedData);
//   } else {
//     existedData = {};
//   }
//   existedData[e.target.name] = e.target.value;
//   localStorage.setItem('feedback-form-state', JSON.stringify(existedData));
// }
// function onSubmitForm(e) {
//   console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
//   e.preventDefault();
//   e.currentTarget.reset();
//   localStorage.removeItem('feedback-form-state');
// }
// function initForm() {
//   let existedData = localStorage.getItem('feedback-form-state');
//   if (existedData) {
//     existedData = JSON.parse(existedData);
//     console.dir(Object.entries);
//     Object.entries(existedData).forEach(([name, value]) => {
//       formEl.elements[name].value = value;
//     });
//   }
// }
