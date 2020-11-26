import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Image from '../Image';
import Typography from '../Typography';
import Button from '../Button';
import List from '../List';
import Rating from '../Rating';
import imagePath from '../../constants/imagePath';
import styles from './ListItem.scss';

const ListItem = ({
  genres,
  titleFilm,
  slideImage,
  voteCount,
  overview,
}) => {
  const urlImage = imagePath + slideImage;
  const threeGenres = genres.slice(0, 3);

  return (
    <div className={styles.filmContainer}>
      <Image
        className={styles.imageFilm}
        src={urlImage}
      />
      <div className={styles.filmInfo}>
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
        <div className={styles.rating}>
          <Rating rating={voteCount}/>
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
    </div>
  );
};

ListItem.propTypes = {};

ListItem.defaultProps = {};

export default ListItem;