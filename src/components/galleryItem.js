import { Component } from 'react'
import * as basicLightbox from 'basiclightbox'
class GalleryItem extends Component {
    openModal = (image) => {
        const instance = basicLightbox.create(`
          <div class="Overlay">
            <div class="Modal">
                <img src=${image.largeImageURL} alt="" />
            </div>
        </div>
        `)

        instance.show()
    }
    render() {
        const { image } = this.props


        return (
            <img onClick={() => this.openModal(image)} src={image.webformatURL} alt="" className="ImageGalleryItem-image" />

        )
    }


}

export default GalleryItem