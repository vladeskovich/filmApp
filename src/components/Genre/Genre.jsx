import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Typography from '../Typography';
import styles from './Genre.scss';
import List from '../List';

const Genre = ({
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

Genre.propTypes = {
  data: PropTypes.string,
  className: PropTypes.string,
};

Genre.defaultProps = {};

export default Genre;
