import React from 'react';
import PropTypes from 'prop-types';
import styles from './Video.scss';

const Video = ({
  key,
}) => (
  <iframe width="560" height="315"
          src="https://www.youtube.com/embed/mjPUGem9SaY" frameBorder="0"
          allow="autoplay; encrypted-media" allowFullScreen></iframe>
);

Video.propTypes = {};

Video.defaultProps = {};

export default Video;
