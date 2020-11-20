import React from 'react';
import PropTypes from 'prop-types';
import Typography from '../Typography';
import styles from './Preloader.scss';

const Preloader = () => (
  <div>
    <div className={styles.circleContainer}>
      <div className={styles.circle1}></div>
      <div className={styles.circle2}></div>
      <div className={styles.circle3}></div>
    </div>
    <Typography>LOADING</Typography>
  </div>
);

Preloader.propTypes = {
  convertedRating: PropTypes.number,
  className: PropTypes.string,
};

Preloader.defaultProps = {};

export default Preloader;
