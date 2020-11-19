import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Image from '../Image';
import Icon from '../Icon';
import Typography from '../Typography';
import Button from '../Button';
import styles from './FilmItem.scss';

const FilmItem = ({}) => {
  const url = 'http://image.tmdb.org/t/p/w1280/gnf4Cb2rms69QbCnGFJyqwBWsxv.jpg';
  const [showInfo, setShow] = useState(false);

  return (
    <div className={styles.filmContainer}>
      <Image
        className={styles.imageFilm}
        src={url}
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
          onClick={setShow}
          color='none'
          outline
        >View Info</Button>
      </div>
      <div className={styles.filmInfo}>

      </div>
    </div>);
};

FilmItem.propTypes = {
  checked: PropTypes.bool,
  name: PropTypes.string,
};

FilmItem.defaultProps = {};

export default FilmItem;
