import './App.css';
import Searchbar from './components/searchbar';
import ImageGallery from './components/imagegallery';
import { useState } from 'react';

export default function App() {
  const [query, setQuery] = useState('');

  const handleQuery = e => {
    e.preventDefault();
    setQuery(e.target.q.value);
  };

  return (
    <div className="App">
      <Searchbar handleQuery={handleQuery} />
      <ImageGallery query={query} />
    </div>
  );
}
