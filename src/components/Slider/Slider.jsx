import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { initializeFilms } from '../../store/actions/films';
import SliderNavigation from '../SliderNavigation';
import Slide from '../Slide';
import styles from './Slider.scss';

const mapStateToProps = (state) => ({
  films: state.films.films,
});

const mapDispatchToProps = (dispatch) => ({
  initializeFilms: (page) => {
    dispatch(initializeFilms(page));
  },
}
);

const Slider = ({
  onClick,
  films,
  initializeFilms,
}) => {
  const dataSlide = films.slice(0, 5);
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    initializeFilms();
    window.addEventListener('scroll', (event) => {
      if (Math.round(window.scrollY + window.innerHeight) === document.body.scrollHeight) {
        initializeFilms();
      }
    });
  }, []);

  // setTimeout(() => (slide < 4 ? setSlide(slide + 1) : setSlide(0)), 3000);

  return (
    <div className={styles.slider}>
      <Slide {...dataSlide[slide]}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Slider);
