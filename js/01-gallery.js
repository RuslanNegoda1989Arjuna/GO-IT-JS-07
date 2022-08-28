import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const divGallery = document.querySelector(".gallery");

const galleryMarckup = makeGalleryMarkup(galleryItems);

divGallery.insertAdjacentHTML("beforeend", galleryMarckup);

function makeGalleryMarkup(gallery) {
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

divGallery.addEventListener("click", onBigImage);

function onBigImage(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== "IMG") {
    return;
  }
  // console.log(evt.target.src);

  const bigImageUrl = evt.target.dataset.source;
  console.log(bigImageUrl);

  const instance = basicLightbox.create(`
    <img src=${bigImageUrl}>
`);

  instance.show();
}
