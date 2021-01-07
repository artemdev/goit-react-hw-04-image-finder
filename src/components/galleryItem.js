import { Component } from 'react';
import * as basicLightbox from 'basiclightbox';

//close modal on Esc button

class GalleryItem extends Component {
  toggleModal = image => {
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
          document.addEventListener('keydown', closeModalWithEscape);
          // close modal by click on Overlay
          setTimeout(() => {
            document
              .querySelector('.Overlay')
              .addEventListener('click', closeModal);
          }, 500);
          // setTimeconsole.log()
        },
        onClose: () => {
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
        onClick={() => this.toggleModal(image)}
        src={image.webformatURL}
        alt=""
        className="ImageGalleryItem-image"
      />
    );
  }
}

export default GalleryItem;
