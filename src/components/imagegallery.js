import { Component } from 'react';
import GalleryItem from './galleryItem';
import shortid from 'shortid';

class ImageGallery extends Component {
  render() {
    const { images } = this.props;

    return (
      <section>
        {!!images.length && (
          <section>
            <ul className="ImageGallery">
              {images.map(image => (
                <li key={shortid.generate()} className="ImageGalleryItem">
                  <GalleryItem image={image} />
                </li>
              ))}
            </ul>
            <button
              className="Button"
              type="submit"
              onClick={this.props.loadMore}
            >
              Load more
            </button>
          </section>
        )}
      </section>
    );
  }
}

export default ImageGallery;
