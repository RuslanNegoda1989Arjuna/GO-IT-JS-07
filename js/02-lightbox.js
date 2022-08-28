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
      <a class="gallery__item" href=${original}>
          <img class="gallery__image" src=${preview} alt=${description} />
      </a>
      `;
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

  // var lightbox = new SimpleLightbox(".gallery a");
}

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
