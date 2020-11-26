import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import imagePath from '../../constants/imagePath';
import Image from '../Image';
import Icon from '../Icon';
import Typography from '../Typography';
import Button from '../Button';
import List from '../List';
import VoteCount from '../VoteCount';
import styles from './GridItem.scss';

const GridItem = ({
  genres,
  titleFilm,
  slideImage,
  voteCount,
  overview,
}) => {
  const urlImage = imagePath + slideImage;
  const [showInfo, setShow] = useState(false);
  const threeGenres = genres.slice(0, 3);

  return (
    <div className={styles.filmContainer}>
      <Image
        className={styles.imageFilm}
        src={urlImage}
      />
      <div className={styles.selectAction}>
        <NavLink
          to='/play'
          className={styles.linkPlay}
        >
          <Icon
            name='play'
            className={styles.playIcon}
          />
          <Typography
            className={styles.playNowText}
          >Play Now
          </Typography>
        </NavLink>
        <Button
          onClick={() => setShow(true)}
          outline
        >View Info</Button>
      </div>
      <div
        className={classNames(styles.filmInfo, { [styles.show]: showInfo })}
      >
        <div className={styles.crossContainer}>
          <Icon
            onClick={() => setShow(false)}
            name='cross'
            className={styles.cross}
          />
        </div>
        <div className={styles.filmHeader}>
          <Typography className={styles.textTitle}>{titleFilm.toUpperCase()}</Typography>
          <List
            data={threeGenres}
            direction="horizontal"
            ordered={false}
            className={styles.genresContainer}
            itemClassName={styles.genreItem}
          >{(genre) => (
            <NavLink
              to={`/genre/${genre.id}`}
              className={styles.genre}
            >
              {genre.name}
            </NavLink>
          )}
          </List>
          <div className={styles.voteCount}>
            <VoteCount
              rating={voteCount}/>
          </div>
        </div>
        <Typography
          className={styles.description}
        >
          {overview}
        </Typography>
        <Button
          color='blue'
          outline
          className={styles.watchNow}
        >Watch Now</Button>
      </div>
    </div>);
};

GridItem.propTypes = {};

GridItem.defaultProps = {};

export default GridItem;