import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Modal from '../Modal/Modal';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Button from '../Button/Button';
import { animateScroll as scroll } from 'react-scroll';

const ImageGallery = ({ value, page, newPageRequest }) => {
  const [result, setResult] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  const [showModal, setSowModal] = useState(false);
  const [src, setSrc] = useState('');

  const toggleModal = () => {
    setSowModal(showModal => (showModal = !showModal));
  };

  const srcSet = event => {
    const src = event.target.dataset.source;
    setSrc(src);
  };

  const onLoadMoreClick = () => {
    newPageRequest(page + 1);

    scroll.scrollToBottom({ duration: 2000 });
  };

  useEffect(() => {
    if (!value) {
      return;
    }
    setStatus('pending');

    fetch(
      `https://pixabay.com/api/?q=${value}&page=${page}&key=21915406-973315f608c7e35a5d0268cdc&image_type=photo&orientation=horizontal&per_page=12`,
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(new Error('Nothing was found'));
      })
      .then(({ hits }) => {
        if (hits.length === 0) {
          return Promise.reject(new Error('Nothing was found'));
        }
        if (page !== 1) {
          setResult(result => (result = [...result, ...hits]));
          setStatus('resolved');
        } else {
          setResult([...hits]);

          setStatus('resolved');
        }
      })

      .catch(error => {
        setError(error);
        setStatus('rejected');
      });
  }, [value, page]);

  if (status === 'idle') {
    return <div style={{ textAlign: 'center' }}>Enter your search</div>;
  }

  if (status === 'pending') {
    return (
      <>
        <ul className={s.ImageGallery}>
          <ImageGalleryItem
            srcSet={srcSet}
            openModal={toggleModal}
            result={result}
          />
        </ul>
        <Loader
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
          type="Grid"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000}
        />
      </>
    );
  }

  if (status === 'rejected') {
    return <h1>{error.message}</h1>;
  }

  if (status === 'resolved') {
    return (
      <>
        <ul className={s.ImageGallery}>
          <ImageGalleryItem
            srcSet={srcSet}
            openModal={toggleModal}
            result={result}
          />
        </ul>

        {showModal && (
          <Modal onClose={toggleModal}>
            <img src={src} alt="" />
          </Modal>
        )}

        <Button loadMore={onLoadMoreClick} />
      </>
    );
  }
};

export default ImageGallery;

ImageGallery.propTypes = {
  page: PropTypes.number,
  searchValue: PropTypes.string,
};
