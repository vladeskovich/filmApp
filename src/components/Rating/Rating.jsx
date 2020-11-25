import React from 'react';
import PropTypes from 'prop-types';
import BarItem from '../Star';
import styles from './Rating.scss';
import VoteCount from '../VoteCount';

const Rating = ({
  rating,
}) => {
  const convertedRating = Math.round(rating / 2);
  const renderStars = () => (Array.from({ length: 5 }, (v, k) => (
      <BarItem
        name='star'
        checked={convertedRating}
        id={5 - k}
      />
  )));
  return (
    <div className={styles.ratingContainer}>
      <div className={styles.ratingInStars}>
        {renderStars()}
      </div>
      <div className={styles.ratingInNumber}>
        <VoteCount rating={rating}/>
      </div>
    </div>
  );
};

Rating.propTypes = {
  data: PropTypes.string,
  className: PropTypes.string,
};

Rating.defaultProps = {};

export default Rating;
