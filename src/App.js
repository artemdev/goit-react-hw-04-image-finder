import './App.css';
import Searchbar from './components/searchbar';
import ImageGallery from './components/imagegallery';
import { Component } from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';

const images = [];
class App extends Component {
  state = {
    query: '',
    images: images || images.hits,
    isLoading: false,
  };

  findImage = e => {};

  findImages = e => {
    e.preventDefault();
    const { query } = e.target;
    this.setState({ query: query.value, isLoading: true });
    const apiKey = '19741747-aaef32235b2696c68d5824b79';
    const per_page = 12;
    const currentPage = 1;
    return axios
      .get(
        `https://pixabay.com/api/?q=${query.value}&page=${currentPage}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=${per_page}`,
      )
      .then(response =>
        this.setState({ images: response.data.hits, isLoading: false }),
      )
      .catch(error => error);
  };

  render() {
    const imageGalleyProps = {
      images: this.state.images,
    };
    return (
      <div className="App">
        <Searchbar findImages={this.findImages} />

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
