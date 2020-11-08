import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Typography from '../Typography';
import styles from './Title.scss';

const Title = ({
  className,
  data,
}) => {
  const classes = classNames(styles.title, className);

  return (
    <Typography className={classes}>{data.toUpperCase()}</Typography>
  );
};

Title.propTypes = {
  data: PropTypes.string,
  className: PropTypes.string,
};

Title.defaultProps = {};

export default Title;
