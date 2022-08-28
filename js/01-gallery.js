import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const divGalleryEl = document.querySelector(".gallery");

const galleryMarckup = onGalleryMarckup(galleryItems);

divGalleryEl.insertAdjacentHTML("beforeend", galleryMarckup);

function onGalleryMarckup(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</div>`;
    })
    .join("");
}

divGalleryEl.addEventListener("click", onBigImage);

function onBigImage(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== "IMG") {
    return;
  }

  const bigImageUrl = evt.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src=${bigImageUrl} >
`);

  instance.show();
}
