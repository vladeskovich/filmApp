import React from 'react';
import PropTypes from 'prop-types';
import Typography from '../Typography';
import List from '../List';

import styles from './Genres.scss';

const Genres = ({
  data,
}) => (
    <div className={styles.genresContainer}>
      <List
        data={data}
        direction="horizontal"
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

Genres.propTypes = {
  data: PropTypes.string,
  className: PropTypes.string,
};

Genres.defaultProps = {};

export default Genres;
