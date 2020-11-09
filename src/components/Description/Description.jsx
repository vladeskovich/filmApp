import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import getTimeFromMin from '../../utils/getTimeFromMin';
import Typography from '../Typography';
import Title from '../Title';
import Genre from '../Genre';
import Rating from '../Rating';

import styles from './Description.scss';

const Description = ({
  data,
  className,
}) => {
  const classes = classNames(styles.description, className);
  const time = getTimeFromMin(data.runtime);

  return (
    <div className={classes}>
      <Title
        data={data.title}
        className={styles.sliderTitle}
      />
      <Genre data={data.genres}/>
      <Typography className={styles.time}>
        | {time.hours}h {time.minutes}m
      </Typography>
      <Rating data={2}/>
    </div>
  );
};

Description.propTypes = {
  data: PropTypes.array,
  className: PropTypes.string,
};

Description.defaultProps = {};

export default Description;
