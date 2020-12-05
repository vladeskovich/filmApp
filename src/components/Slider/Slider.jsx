import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SliderNavigation from '../SliderNavigation';
import Slide from '../Slide';
import styles from './Slider.scss';

const mapStateToProps = (state) => ({
  films: state.films.films,
});

const Slider = ({
  films,
  onShow,
}) => {
  const dataSlide = films.slice(0, 5);
  const [slide, setSlide] = useState(0);

  // setTimeout(() => (slide < 4 ? setSlide(slide + 1) : setSlide(0)), 3000);

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
  className: PropTypes.string,
  name: PropTypes.string,
};

Slider.defaultProps = {};

export default connect(mapStateToProps, null)(Slider);
