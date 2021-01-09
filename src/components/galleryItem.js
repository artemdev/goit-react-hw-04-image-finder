import * as basicLightbox from 'basiclightbox';

export default function GalleryItem({ image }) {
  return (
    <img
      onClick={() => openModal(image)}
      src={image.webformatURL}
      alt=""
      className="ImageGalleryItem-image"
    />
  );
}

const openModal = image => {
  const closeModalWithEscape = e => {
    if (e.key === 'Escape') modalInstance.close();
  };
  const closeModal = () => {
    modalInstance.close();
  };

  let modalInstance = basicLightbox.create(
    `
        <div class="Overlay">
          <div class="Modal">
              <img src=${image.largeImageURL} alt="" />
          </div>
      </div>
      `,
    {
      closable: true,
      onShow: () => {
        //add listeners
        document.addEventListener('keydown', closeModalWithEscape);
        setTimeout(() => {
          document
            .querySelector('.Overlay')
            .addEventListener('click', closeModal);
        }, 500);
      },
      onClose: () => {
        document.removeEventListener('keydown', closeModalWithEscape);
        document
          .querySelector('.Overlay')
          .removeEventListener('click', closeModal);
      },
    },
  );
  modalInstance.show();
};
