import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';

import Star from '../Star';
import styles from './Rating.scss';

const Rating = ({
  data,
}) => {
  const convertedRating = Math.round(data / 2);
  const rating = Array.from({ length: 5 }, (v, k) => (
    /* <Icon
      name='star'
      className={k + 1 <= convertedRating
        ? styles.ratingStar
        : styles.ratingStarFill
      }
    /> */
    <Icon name='star' className={styles.ratingStar}/>
  ));
  return (
    <div className={styles.ratingContainer}>
      <Star/>
      <Star/>
      <Star/>
      <Star/>
      <Star/>
    </div>
  );
};

Rating.propTypes = {
  data: PropTypes.string,
  className: PropTypes.string,
};

Rating.defaultProps = {};

export default Rating;
