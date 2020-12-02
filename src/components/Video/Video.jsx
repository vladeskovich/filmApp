import React from 'react';
import PropTypes from 'prop-types';
import Preloader from '../Preloader';
import styles from './Video.scss';

const Video = ({
  key,
  loadingVideo,
}) => (
  loadingVideo ? <Preloader/> : <iframe width="560" height="315"
                src={`https://www.youtube.com/embed/${key}`} frameBorder="0"
                allow="autoplay; encrypted-media" allowFullScreen></iframe>

);

Video.propTypes = {};

Video.defaultProps = {};

export default Video;
