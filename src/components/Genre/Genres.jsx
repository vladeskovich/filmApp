import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Typography from '../Typography';
import List from '../List';

import styles from './Genres.scss';

const Genres = ({
  className,
  data,
}) => {
  const classes = classNames(styles.genre, className);

  return (
    <div className={styles.genreWrapper}>
      <List
        data={data}
        direction="horizontal"
        ordered={false}
        className={styles.genresContainer}
        itemClassName={styles.genreItem}
      >{(genre) => (
        <Typography
          className={styles.genre}
        >
          {genre.name}
        </Typography>
      )}
      </List>
    </div>

  );
};

Genres.propTypes = {
  data: PropTypes.string,
  className: PropTypes.string,
};

Genres.defaultProps = {};

export default Genres;
