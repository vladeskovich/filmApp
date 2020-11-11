import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Image from '../Image';
import Description from '../Description';
import SliderNavigation from '../SliderNavigation';

import styles from './Slider.scss';

const Slider = ({
  onClick,
}) => {
  const baseUrl = 'http://image.tmdb.org/t/p/original/';
  const test = [
    {
      src: `${baseUrl}pci1ArYW7oJ2eyTo2NMYEKHHiCP.jpg`,
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
  // setTimeout(() => (slide === 1 ? setSlide(0) : setSlide(1)), 2000);

  return (
    <div className={styles.slider}>
      <Image src={test[slide].src}
      className={styles.background}
      />
      <Description
        data={test[slide]}
      />
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
