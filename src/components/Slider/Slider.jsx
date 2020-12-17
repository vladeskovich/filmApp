import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SliderNavigation from '../SliderNavigation';
import Slide from '../Slide';
import styles from './Slider.scss';

const mapStateToProps = (state) => ({
  films: state.films.films,
});

const NUMBER_SLIDES = 5;
const DURATION_SLIDE = 7000;

const Slider = ({
  films,
  onShow,
}) => {
  const dataSlide = films.slice(0, NUMBER_SLIDES);
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const timeOutId = setTimeout(() => setSlide(
      (prevSlide) => (prevSlide + 1) % NUMBER_SLIDES,
    ), DURATION_SLIDE);

    return () => {
      clearTimeout(timeOutId);
    };
  }, [slide, setSlide]);

  return (
    <div className={styles.slider}>
      <Slide
        {...dataSlide[slide]}
        onShow={onShow}
      />
      <SliderNavigation
        activeSlide={slide}
        onClick={setSlide}
      />
    </div>
  );
};

Slider.propTypes = {
  films: PropTypes.array,
  onShow: PropTypes.func,
};

Slider.defaultProps = {};

export default connect(mapStateToProps, null)(Slider);
