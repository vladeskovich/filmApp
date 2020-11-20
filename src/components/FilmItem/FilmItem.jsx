import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import Image from '../Image';
import Icon from '../Icon';
import Typography from '../Typography';
import Button from '../Button';
import List from '../List';
import VoteCount from '../VoteCount';
import styles from './FilmItem.scss';

const FilmItem = ({
  genres,
  titleFilm,
  slideImage,
  voteCount,
}) => {
  const urlImage = `http://image.tmdb.org/t/p/w1280${slideImage}`;
  const [showInfo, setShow] = useState(false);

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
          color='none'
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
            data={genres}
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
        >Lorem dbfeibo oeinb doefio n
        </Typography>
        <Button
          color='blue'
          outline
          className={styles.watchNow}
        >Watch Now</Button>

      </div>
    </div>);
};

FilmItem.propTypes = {
  checked: PropTypes.bool,
  name: PropTypes.string,
};

FilmItem.defaultProps = {};

export default FilmItem;
