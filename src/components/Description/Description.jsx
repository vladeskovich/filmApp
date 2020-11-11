import React from 'react';
import PropTypes from 'prop-types';
import getTimeFromMin from '../../utils/getTimeFromMin';
import VoteCount from '../VoteCount';
import Typography from '../Typography';
import Title from '../Title';
import Genre from '../Genre';
import Rating from '../Rating';

import styles from './Description.scss';

const Description = ({
  data,
  className,
}) => {
  const time = getTimeFromMin(data.runtime);
  return (
    <div className={styles.description}>
      <Title
        data={data.title}
        className={styles.sliderTitle}
      />
      <Genre data={data.genres}/>
      <Typography className={styles.time}>
        | {time.hours}h {time.minutes}m
      </Typography>
      <Rating rating={data.vote_average}/>
      <VoteCount
        rating={data.vote_average}
        className={styles.sliderVoteCount}
      />
    </div>
  );
};

Description.propTypes = {
  data: PropTypes.array,
  className: PropTypes.string,
};

Description.defaultProps = {};

export default Description;
