import { Component } from 'react';
import * as basicLightbox from 'basiclightbox';

class GalleryItem extends Component {
  openModal = image => {
    const closeModalWithEscape = e => {
      if (e.key === 'Escape') this.modalInstance.close();
    };
    const closeModal = () => {
      this.modalInstance.close();
    };

    this.modalInstance = basicLightbox.create(
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
          //remove listeners
          document.removeEventListener('keydown', closeModalWithEscape);
          document
            .querySelector('.Overlay')
            .removeEventListener('click', closeModal);
        },
      },
    );
    this.modalInstance.show();
  };

  render() {
    const { image } = this.props;

    return (
      <img
        onClick={() => this.openModal(image)}
        src={image.webformatURL}
        alt=""
        className="ImageGalleryItem-image"
      />
    );
  }
}

export default GalleryItem;
