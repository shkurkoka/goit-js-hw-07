import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

galleryItems.forEach((item, index) => {

    gallery.insertAdjacentHTML("beforeend", `
        <li class="gallery__item">
            <a class="gallery__link" href="${item.original}" alt="${item.description}">
                <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
            </a>
        </li>
    `);

});

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
    captionPosition: "bottom-left"
});

