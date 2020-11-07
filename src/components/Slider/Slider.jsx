import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ew from './1.jpg';
import Image from '../Image';

import styles from './Slider.scss';

const Slider = ({
  className,
  onClick,
}) => {
  const classes = classNames(styles.slider, className);

  return (
    <div className={classes}>
      <Image src="https://klike.net/uploads/posts/2019-11/1572612050_1.jpg"
      className={styles.background}
      />
    </div>
  );
};

Slider.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
};

Slider.defaultProps = {};

export default Slider;
