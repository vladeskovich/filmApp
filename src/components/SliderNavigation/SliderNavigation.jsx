import React from 'react';
import PropTypes from 'prop-types';
import BarItem from '../Star';
import styles from './SliderNavigation.scss';

const SliderNavigation = ({
  onClick,
}) => {
  const fiveStar = Array.from({ length: 5 }, (v, k) => (
      <BarItem
        checked={3}
        name='bar'
        id={k + 1}
      />
  ));
  return (
    <div className={styles.sliderNavigation}>
      {fiveStar}
    </div>
  );
};

SliderNavigation.propTypes = {
  data: PropTypes.string,
  className: PropTypes.string,
};

SliderNavigation.defaultProps = {};

export default SliderNavigation;
