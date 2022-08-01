// Add imports above this line
import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');

function onCreateListImg(galleryItems) {
  return galleryItems.reduce(
    (acc, item) =>
      acc +
      `<a class="gallery__item" href="${item.original}">
          <img class="gallery__image" src="${item.preview}" 
              alt="${item.description}}" />
      </a>`,
    '',
  );
}

const onCreateGallery = onCreateListImg(galleryItems);

galleryEl.innerHTML = onCreateGallery;

var lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});

console.log(lightbox);
