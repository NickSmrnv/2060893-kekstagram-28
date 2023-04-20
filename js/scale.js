// Модуль редактирования изображения
import {DataForScale} from './data.js';

const scaleFieldset = document.querySelector('.img-upload__scale');
const scaleSmallerButton = scaleFieldset.querySelector('.scale__control--smaller');
const scaleBiggerButton = scaleFieldset.querySelector('.scale__control--bigger');
const scaleValue = scaleFieldset.querySelector('.scale__control--value');
const imagePreview = document.querySelector('.img-upload__preview img');

const scaleImage = (value) => {
  imagePreview.style.transform = `scale(${value / 100})`;
  scaleValue.value = `${value}%`;
};

const onClickSmallerButton = () => {
  const newValue = parseInt (scaleValue.value, 10);
  const calcSmaller = newValue - DataForScale.STEP_SCALE_VALUE;
  scaleValue.value = calcSmaller < DataForScale.MIN_SCALE_VALUE ? DataForScale.MIN_SCALE_VALUE : calcSmaller;
  scaleImage(scaleValue.value);
};

const onClickBiggerButton = () => {
  const newValue = parseInt (scaleValue.value, 10);
  const calcBigger = newValue + DataForScale.STEP_SCALE_VALUE;
  scaleValue.value = calcBigger > DataForScale.MAX_SCALE_VALUE ? DataForScale.MAX_SCALE_VALUE : calcBigger;
  scaleImage(scaleValue.value);
};

scaleSmallerButton.addEventListener('click', onClickSmallerButton);
scaleBiggerButton.addEventListener('click', onClickBiggerButton);

const resetScale = () => scaleImage(DataForScale.DEFAULT_SCALE_VALUE);

export {resetScale};
