import {isEscapeKey} from './util.js';
import {onDocumentEscKeydown} from './user-form.js';

const templateSuccessMessage = document.querySelector('#success')
  .content.querySelector('.success');
const successButton = templateSuccessMessage.querySelector('.success__button');
const templateErrorMessage = document.querySelector('#error')
  .content.querySelector('.error');
const errorButton = templateErrorMessage.querySelector('.error__button');
const body = document.querySelector('body');

const onModalEscKeydown = (evt) => {
  if(isEscapeKey(evt)) {
    evt.preventDefault();
    closeModalMessage();
    document.addEventListener('keydown', onDocumentEscKeydown);
  }
};

function closeModalMessage () {
  templateSuccessMessage.classList.add('hidden');
  templateErrorMessage.classList.add('hidden');
  document.removeEventListener('keydown', onModalEscKeydown);
  document.addEventListener('keydown', onDocumentEscKeydown);
}

const showSuccessMessage = () => {
  body.append(templateSuccessMessage);
  templateSuccessMessage.classList.remove('hidden');
  document.addEventListener('keydown', onModalEscKeydown);
};

const showErrorMessage = () => {
  body.append(templateErrorMessage);
  templateErrorMessage.classList.remove('hidden');
  document.addEventListener('keydown', onModalEscKeydown);
  document.removeEventListener('keydown', onDocumentEscKeydown);
};

successButton.addEventListener('click', closeModalMessage);
errorButton.addEventListener('click', closeModalMessage);
document.addEventListener('click', closeModalMessage);

export {showSuccessMessage, showErrorMessage};
