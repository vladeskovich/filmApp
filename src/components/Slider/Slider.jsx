import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Image from '../Image';
import Typography from '../Typography';
import styles from './Slider.scss';

const Slider = ({
  className,
  onClick,
}) => {
  const classes = classNames(styles.slider, className);
  const baseUrl = 'http://image.tmdb.org/t/p/w500/';
  const test = [
    { src: `${baseUrl}pci1ArYW7oJ2eyTo2NMYEKHHiCP.jpg`, title: 'Инферно Габриэля 2' },
    { src: `${baseUrl}riAooJrFvVhotyaOgoI0WR7okSe.jpg`, title: 'Dedicada a mi ex' },
  ];
  const [slide, setSlide] = useState(0);
  // setTimeout(() => (slide === 1 ? setSlide(0) : setSlide(1)), 2000);

  return (
    <div className={classes}>
      <Image src={test[slide].src}
      className={styles.background}
      />
      <div className={styles.description}>
        <Typography
          className={styles.title}
        >{test[slide].title.toUpperCase()}</Typography>
      </div>
    </div>
  );
};

Slider.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
};

Slider.defaultProps = {};

export default Slider;
