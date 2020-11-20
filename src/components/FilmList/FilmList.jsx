import React from 'react';
import PropTypes from 'prop-types';
import FilmItem from '../FilmItem';
import styles from './FilmList.scss';

const FilmList = ({
  films,
}) => (
    <div className={styles.filmsContainer}>
      {films.map((film) => <FilmItem {...film}/>)}
    </div>
);

FilmList.propTypes = {
  checked: PropTypes.bool,
  name: PropTypes.string,
};

FilmList.defaultProps = {};

export default FilmList;
