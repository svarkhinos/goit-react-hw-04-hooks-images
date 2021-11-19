import './App.css';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';

import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';

const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [page, setPage] = useState(1);

  const handleSearchFormSubmit = value => {
    setSearchValue(value);
    setPage(1);
  };

  const newPageRequest = newPage => {
    setPage(newPage);
  };

  return (
    <div className="App">
      <Searchbar onSubmit={handleSearchFormSubmit} />
      <ImageGallery
        value={searchValue}
        page={page}
        newPageRequest={newPageRequest}
      />
      <ToastContainer autoClose={3000} position={'top-center'} />
    </div>
  );
};

export default App;
