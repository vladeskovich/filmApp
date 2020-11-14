import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SliderNavigation from '../SliderNavigation';
import Slide from '../Slide';
import styles from './Slider.scss';

const Slider = ({
  onClick,
}) => {
  const baseUrl = 'http://image.tmdb.org/t/p/w1280/';
  const test = [
    {
      src: `${baseUrl}gnf4Cb2rms69QbCnGFJyqwBWsxv.jpg`,
      title: 'Инферно Габриэля 2',
      genres: [
        {
          id: 12,
          name: 'приключения',
        },
        {
          id: 16,
          name: 'мультфильм',
        },
        {
          id: 35,
          name: 'комедия',
        },
        {
          id: 10751,
          name: 'семейный',
        },
      ],
      runtime: 85,
      vote_average: 5,
    },
    {
      src: `${baseUrl}riAooJrFvVhotyaOgoI0WR7okSe.jpg`,
      title: 'Dedicada a mi ex',
      genres: [
        {
          id: 12,
          name: 'приключения',
        },
        {
          id: 16,
          name: 'мультфильм',
        },
        {
          id: 35,
          name: 'комедия',
        },
        {
          id: 10751,
          name: 'семейный',
        },
      ],
      runtime: 90,
      vote_average: 5,
    },
  ];
  const [slide, setSlide] = useState(0);
  // setTimeout(() => (slide === 1 ? setSlide(0) : setSlide(1)), 3000);

  return (
    <div className={styles.slider}>
      <Slide slide={test[slide]}/>
      <SliderNavigation/>
    </div>
  );
};

Slider.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
};

Slider.defaultProps = {};

export default Slider;
