import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Typography from '../Typography';
import styles from './VoteCount.scss';

const VoteCount = ({
  className,
  rating,
}) => {
  const classes = classNames(styles.voteCount, className);
  const ratingRound = Math.round((rating / 2) * 10) / 10;
  return (
    <Typography
      className={classes}
    >
      {ratingRound}
    </Typography>
  );
};

VoteCount.propTypes = {
  rating: PropTypes.number,
  className: PropTypes.string,
};

VoteCount.defaultProps = {};

export default VoteCount;
