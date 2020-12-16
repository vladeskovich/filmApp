import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Image.scss';

const Image = ({
  className,
  src,
}) => {
  const classes = classNames(styles.image, className);

  return (
    <img
      src={src}
      className={classes}
    />
  );
};

Image.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
};

export default Image;
