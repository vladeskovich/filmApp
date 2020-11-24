import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import GridItem from '../GridItem';
import Preloader from '../Preloader';
import ListItem from '../ListItem';
import styles from './FilmList.scss';

const FilmList = ({
  films,
  loading,
  displayType,
}) => {
  const classes = classNames(styles.filmsContainer,
    { [styles.grid]: displayType.grid },
    { [styles.list]: displayType.list });
  return (
    <div className={classes}>
      {displayType.grid && films.map((film) => <GridItem displayType={displayType} {...film}/>)}
      {displayType.list && films.map((film) => <ListItem displayType={displayType} {...film}/>)}
      {loading && <Preloader/>}
    </div>
  );
};

FilmList.propTypes = {
  checked: PropTypes.bool,
  name: PropTypes.string,
};

FilmList.defaultProps = {};

export default FilmList;
