import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../Button';
import Typography from '../Typography';
import Genres from '../Genres';
import getTimeFromMin from '../../utils/getTimeFromMin';
import Rating from '../Rating';
import imagePath from '../../constants/imagePath';
import styles from './Slide.scss';

const Slide = ({
  slideImage,
  titleFilm,
  voteCount,
  runtime,
  genres,
  onShow,
  overview,
  id,
}) => {
  const time = getTimeFromMin(runtime);
  const urlImage = imagePath + slideImage;
  const mainGenres = genres.slice(0, 3);

  const [showOverview, setShow] = useState(false);

  const toogleOverviewHandler = useCallback(() => {
    const newVisibleOverwiew = !showOverview;

    setShow(newVisibleOverwiew);
  }, [setShow, showOverview]);

  return (
    <div style={{
      backgroundImage: slideImage
        ? `url(${urlImage})`
        : 'none',
    }}
         className={styles.slide}
    >
      <div className={styles.slideTop}></div>
      <div className={styles.slideBottom}>
        <div className={styles.slideInfo}>
          <div className={styles.slideTitle}>
            <Typography className={styles.textTitle}>{titleFilm.toUpperCase()}</Typography>
          </div>
          <Genres data={mainGenres}/>
          <div className={styles.wrapperRuntimeFilm}>
            <Typography className={styles.runtimeFilm}>
              | {time.hours}h {time.minutes}m
            </Typography>
          </div>
          <Rating rating={voteCount}/>
        </div>
        <div className={styles.slideButtons}>
          <div
            className={classNames(styles.filmOverview, { [styles.show]: showOverview })}
          >
            <Typography className={styles.textOverview}>{overview}</Typography>
          </div>
          <Button
            data-item-id={id}
            onClick={onShow}
            color='blue'
            outline
          >Watch Now</Button>
          <Button
            onClick={toogleOverviewHandler}
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
  slideImage: '',
  titleFilm: ' ',
  voteCount: 0,
  runtime: 0,
  genres: [],
};

export default Slide;
