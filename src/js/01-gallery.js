import { galleryItems } from './gallery-items';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryWrapper = document.querySelector('.gallery');
const galleryEl = createGallery(galleryItems);
galleryWrapper.innerHTML = galleryEl;

new SimpleLightbox('.gallery__item', {
  captionsData: 'alt',
  fadeSpeed: 250,
  showCounter: false,
});

function createGallery(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join('');
}
