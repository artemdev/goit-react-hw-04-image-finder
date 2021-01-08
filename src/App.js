import './App.css';
import Searchbar from './components/searchbar';
import ImageGallery from './components/imagegallery';
import getImages from './api/getImages';
import { Component } from 'react';

import Loader from 'react-loader-spinner';

class App extends Component {
  state = {
    isLoading: false,
    q: 'ukraine',
    page: 1,
    images: [],
  };

  loadMore = e => {
    e.preventDefault();
    this.setState({ isLoading: true });

    const nextPage = this.state.page + 1;
    const q = this.state.q;

    getImages(q, nextPage)
      .then(images => {
        this.setState(prevState => {
          return {
            ...prevState,
            images: [...prevState.images, ...images],
            page: nextPage,
            isLoading: false,
          };
        });
      })
      .then(() =>
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        }),
      )
      .catch(console.log);
  };

  handleImages = e => {
    e.preventDefault();

    this.setState(prevState => {
      return { ...prevState, q: e.target.q.value, isLoading: true };
    });

    getImages(this.state.q)
      .then(images =>
        this.setState(prevState => {
          return { ...prevState, images: images };
        }),
      )
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  render() {
    const imageGalleyProps = {
      images: this.state.images,
      loadMore: this.loadMore,
    };
    return (
      <div className="App">
        <Searchbar handleImages={this.handleImages} />

        {this.state.isLoading ? (
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000}
          />
        ) : (
          <ImageGallery {...imageGalleyProps} />
        )}
      </div>
    );
  }
}

export default App;
