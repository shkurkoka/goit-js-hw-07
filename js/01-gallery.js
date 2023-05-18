import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector('.gallery');

galleryItems.forEach((item, index) => {

    const li = document.createElement("li");
    li.classList.add("gallery__item");

    const link = document.createElement("a");
    link.classList.add("gallery__link");
    link.href = item.original;

    const newImage = document.createElement("img");
    newImage.classList.add("gallery__image");
    newImage.src = item.preview;
    newImage.setAttribute("data-source", item.original);
    newImage.alt = item.description;

    link.append(newImage);
    li.append(link);
    gallery.append(li);
});


gallery.addEventListener("click", (event) => {
    if (event.target.nodeName !== "IMG") {
        return;
    }

    event.preventDefault();

    const url = event.target.parentNode.href;

    const instance = basicLightbox.create(`
        <img src="${url}" />
    `);

    instance.show();
} );
