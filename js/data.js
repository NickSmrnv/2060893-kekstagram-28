// Модуль данных

// Данные для формы
const DataForForm = {
  MAX_HASHTAG_QUANTITY: 5,
  VALID_SYMBOLS: /^#[a-zа-яё0-9]{1,19}$/i,
  ERROR_MESSAGE_VALID_HASHTAG: 'Хэштэг должен начинаться с # (решётка). Хэштэг не может состоять только из одной решётки и иметь длину более 20 символов, а также иметь спецсимволы в названии (#, @, $ и т.п.)',
  ERROR_MESSAGE_HASHTAG_QUANTITY:'Должно быть не более 5 хэштэгов',
  ERROR_MESSAGE_UNIQUE_HASHTAG: 'Хэштэги должны быть уникальными',
};

// Данные для фильтров(эффектов) фотографии
const dataForEffects = [
  {
    name: 'none',
    style: 'none',
    min: 0,
    max: 100,
    step: 1,
    unit: '',
  },
  {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%'
  },
  {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px'
  },
  {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: ''
  },
];

// Данные для редактирования изображения
const DataForScale = {
  DEFAULT_SCALE_VALUE: 100,
  STEP_SCALE_VALUE: 25,
  MAX_SCALE_VALUE: 100,
  MIN_SCALE_VALUE: 25,
};

export {DataForForm, dataForEffects, DataForScale};
