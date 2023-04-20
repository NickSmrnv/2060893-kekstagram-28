import {getData} from './api.js';
import {renderGallery} from './gallery.js';
import {showAlert, debounce} from './util.js';
import {init, getFilteredPictures} from './filters.js';
import './user-form.js';

try {
  const data = await getData();
  const debouncedRenderGallery = debounce(renderGallery);
  init(data, debouncedRenderGallery);
  renderGallery(getFilteredPictures());
} catch (err) {
  showAlert(err.message);
}
