import { useEffect, useState } from 'react';
import GalleryItem from './galleryItem';
import Loader from 'react-loader-spinner';
import shortid from 'shortid';
import getImages from '../api/getImages';

export default function ImageGallery({ query }) {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (query) {
      setIsLoading(true);
      getImages(query)
        .then(images => !!images.length && setImages(images))
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [query]);

  const loadMore = e => {
    e.preventDefault();
    setPage(prevPage => prevPage + 1);
    setIsLoading(true);
    getImages(query, page + 1)
      .then(newImages => {
        setImages([...images, ...newImages]);
        setIsLoading(false);
      })
      .then(() =>
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        }),
      )
      .catch(console.log);
  };

  return (
    <section>
      {isLoading ? (
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000}
        />
      ) : images.length ? (
        <section>
          <ul className="ImageGallery">
            {images.map(image => (
              <li key={shortid.generate()} className="ImageGalleryItem">
                <GalleryItem image={image} />
              </li>
            ))}
          </ul>
          <button className="Button" type="submit" onClick={loadMore}>
            Load more
          </button>
        </section>
      ) : (
        <h3>Please, enter the name of the image to find</h3>
      )}
    </section>
  );
}
