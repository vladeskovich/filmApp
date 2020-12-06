import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Preloader from '../Preloader';
import Error from '../Error';
import styles from './Video.scss';

const Video = ({
  data,
  onReset,
}) => {
  const [error, setError] = useState(false);

  const { key } = data[0] || {};
  useEffect(() => {
    const id = setTimeout(() => {
      setError({ text: 'timeout' });
    }, 10000);
    return () => {
      clearTimeout(id);
      onReset([]);
    };
  }, [onReset]);

  const renderStatus = () => (error ? <Error {...error}/> : <Preloader/>);

  return (
    key
      ? <div className={styles.videoContainer}>
        <iframe
          src={`https://www.youtube.com/embed/${key}`}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>
      : renderStatus()
  );
};

Video.propTypes = {
  data: PropTypes.array,
  onReset: PropTypes.func,
};

Video.defaultProps = {};

export default Video;
