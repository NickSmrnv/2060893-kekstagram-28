import {isEscapeKey} from './util.js';

const COMMENTS_ON_PART = 5;

const bigPicture = document.querySelector('.big-picture');
const cancelButton = document.querySelector('.big-picture__cancel');
const commentList = document.querySelector('.social__comments');
const commentItem = document.querySelector('.social__comment');
const body = document.querySelector('body');
const commentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.social__comments-loader');

let commentsShown = 0;
let commentsTotal = 0;
let commentsArray = [];

const createComment = ({avatar, name, message}) => {
  const commentElement = commentItem.cloneNode(true);

  commentElement.querySelector('.social__picture').src = avatar;
  commentElement.querySelector('.social__picture').alt = name;
  commentElement.querySelector('.social__text').textContent = message;

  return commentElement;
};

const resetCommentsContainer = () => {
  commentList.innerHTML = '';
};

const renderComments = () => {
  const renderedComments = commentsArray.splice(0, COMMENTS_ON_PART);
  commentsShown += renderedComments.length;

  if (!commentsArray.length) {
    commentsLoader.classList.add('hidden');
  } else {
    commentsLoader.classList.remove('hidden');
  }

  const fragment = document.createDocumentFragment();
  renderedComments.forEach((comment) => {
    const commentElement = createComment(comment);
    fragment.append(commentElement);
  });

  commentList.append(fragment);
  commentCount.innerHTML = `${commentsShown} из <span class="comments-count">${commentsTotal}</span> комментариев`;
};

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  commentsShown = 0;
  commentsTotal = 0;
  commentsArray = [];
};

function onDocumentKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
}

const openBigPicture = (evt) => {
  if (evt.target.closest('.picture')) {
    evt.preventDefault();
    bigPicture.classList.remove('hidden');
    document.body.classList.add('modal-open');
    bigPicture.querySelector('.big-picture__img img').src = evt.target.src;
  }
  document.addEventListener('keydown', onDocumentKeydown);
};

bigPicture.addEventListener('click', openBigPicture);

cancelButton.addEventListener('click', () => {
  closeBigPicture();
});

const renderPictureDetails = (index) => {
  bigPicture.querySelector('.big-picture__img img').src = index.url;
  bigPicture.querySelector('.likes-count').textContent = index.likes;
  bigPicture.querySelector('.social__caption').textContent = index.description;
};

const showBigPicture = (index) => {
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
  commentsLoader.classList.remove('hidden');
  commentCount.classList.remove('hidden');
  document.addEventListener('keydown', onDocumentKeydown);
  renderPictureDetails(index);
  commentsArray = index.comments.slice();
  commentsTotal = commentsArray.length;
  resetCommentsContainer();
  renderComments();
  commentsLoader.addEventListener('click', () => {
    renderComments();
  });
};

export {showBigPicture};
