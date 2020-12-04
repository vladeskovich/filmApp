import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import Typography from '../Typography';
import Genres from '../Genres';
import getTimeFromMin from '../../utils/getTimeFromMin';
import Rating from '../Rating';
import styles from './Slide.scss';
import imagePath from '../../constants/imagePath';

const Slide = ({
  slideImage,
  titleFilm,
  voteCount,
  runtime,
  genres,
}) => {
  const time = getTimeFromMin(runtime);
  const urlImage = imagePath + slideImage;

  return (
    <div style={{ backgroundImage: `url(${urlImage})` }} className={styles.slide}>
      <div className={styles.slideTop}></div>
      <div className={styles.slideBottom}>
        <div className={styles.slideInfo}>
          <div className={styles.slideTitle}>
            <Typography className={styles.textTitle}>{titleFilm.toUpperCase()}</Typography>
          </div>
          <Genres data={genres}/>
          <div className={styles.wrapperRuntimeFilm}>
            <Typography className={styles.runtimeFilm}>
              | {time.hours}h {time.minutes}m
            </Typography>
          </div>
          <Rating rating={voteCount}/>
        </div>
        <div className={styles.slideButtons}>
          <Button
            color='blue'
            outline
          >Watch Now</Button>
          <Button
            color='none'
            outline
          >View Info</Button>
        </div>
      </div>
    </div>
  );
};
Slide.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  slideImage: PropTypes.string,
  titleFilm: PropTypes.string,
  voteCount: PropTypes.number,
  runtime: PropTypes.number,
  genres: PropTypes.array,
};

Slide.defaultProps = {
  slideImage: ' ',
  titleFilm: ' ',
  voteCount: 0,
  runtime: 0,
  genres: [],
};

export default Slide;
