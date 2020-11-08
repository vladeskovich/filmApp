import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import getTimeFromMin from '../../utils/getTimeFromMin';
import Typography from '../Typography';
import List from '../List';
import styles from './Description.scss';

const Description = ({
  data,
  className,
}) => {
  const classes = classNames(styles.description, className);
  const time = getTimeFromMin(data.runtime);

  return (
    <div className={classes}>
      <Typography
        className={styles.title}
      >{data.title.toUpperCase()}</Typography>
      <List
        data={data.genres}
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
      <Typography>{time.hours} | {time.minutes}</Typography>
    </div>
  );
};

Description.propTypes = {
  data: PropTypes.array,
  className: PropTypes.string,
};

Description.defaultProps = {};

export default Description;
