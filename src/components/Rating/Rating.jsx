import React from 'react';
import PropTypes from 'prop-types';
import Star from '../Star';
import styles from './Rating.scss';

const Rating = ({
  rating,
}) => {
  const convertedRating = Math.round(rating / 2);
  const fiveStar = Array.from({ length: 5 }, (v, k) => (
      <Star
        checked={convertedRating}
        id={5 - k}
      />
  ));
  return (
    <div className={styles.ratingContainer}>
      {fiveStar}
    </div>
  );
};

Rating.propTypes = {
  data: PropTypes.string,
  className: PropTypes.string,
};

Rating.defaultProps = {};

export default Rating;
