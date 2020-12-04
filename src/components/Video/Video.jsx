import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Preloader from '../Preloader';
import Error from '../Error';
import styles from './Video.scss';

const Video = ({
  data,
}) => {
  const [showError, setShowError] = useState(false);

  const { key } = data[0] || {};

  useEffect(() => {
    const id = setTimeout(() => {
      if (data.length === 0) {
        setShowError(true);
      }
    }, 5000);
    return () => {
      clearTimeout(id);
    };
  }, [data]);

  const renderStatus = () => (showError ? <Error/> : <Preloader/>);

  return (
    key
      ? <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${key}`}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
      : renderStatus()
  );
};

Video.propTypes = {};

Video.defaultProps = {};

export default Video;
