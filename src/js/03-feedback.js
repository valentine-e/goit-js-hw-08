import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');

const STORAGE_KEY = 'feedback-form-state';

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onInputType, 500));

getStorageData();

let feedbackFormData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

function onInputType(e) {
  feedbackFormData[e.target.name] = e.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(feedbackFormData));
}

function onFormSubmit(e) {
  e.preventDefault();

  console.log(feedbackFormData);

  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);

  feedbackFormData = {};
}

function getStorageData() {
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedData) {
    formEl.elements.email.value = savedData.email || '';
    formEl.elements.message.value = savedData.message || '';
  }
}
