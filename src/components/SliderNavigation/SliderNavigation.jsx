import React from 'react';
import PropTypes from 'prop-types';
import BarItem from '../BarItem';
import styles from './SliderNavigation.scss';

const SliderNavigation = ({
  activeSlide,
  onClick,
}) => {
  const fiveIndicator = Array.from({ length: 5 }, (v, k) => (
      <BarItem
        onClick={onClick}
        checked={activeSlide + 1}
        name='bar'
        id={k + 1}
      />
  ));
  return (
    <div className={styles.sliderNavigation}>
      {fiveIndicator}
    </div>
  );
};

SliderNavigation.propTypes = {
  activeSlide: PropTypes.number,
  onClick: PropTypes.func,
};

SliderNavigation.defaultProps = {};

export default SliderNavigation;
