import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import Typography from '../Typography';
import Genres from '../Genre';
import getTimeFromMin from '../../utils/getTimeFromMin';
import Rating from '../Rating';

import styles from './Slide.scss';

const Slide = ({
  slide,
  onClick,
}) => {
  const time = getTimeFromMin(slide.runtime);
  return (
  <div style={{ backgroundImage: `url(${slide.src})` }} className={styles.slide}>
    <div className={styles.slideTop}></div>
    <div className={styles.slideBottom}>
      <div className={styles.slideInfo}>
        <div className={styles.slideTitle}>
          <Typography className={styles.textTitle}>{slide.title.toUpperCase()}</Typography>
        </div>
        <Genres data={slide.genres}/>
        <div className={styles.wrapperRuntimeFilm}>
          <Typography className={styles.runtimeFilm}>
            | {time.hours}h {time.minutes}m
          </Typography>
        </div>
        <Rating rating={slide.vote_average}/>
      </div>
      <div className={styles.slideButtons}>
        <Button
          color='blue'
          outline={true}
        >Watch Now</Button>
        <Button
          color='none'
          outline={true}
        >View Info</Button>
      </div>
    </div>
  </div>
  );
};
Slide.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
};

Slide.defaultProps = {};

export default Slide;
