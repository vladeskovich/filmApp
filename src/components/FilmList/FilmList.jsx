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
  onShow,
}) => {
  const classes = classNames(styles.filmsContainer,
    { [styles.grid]: displayType === 'grid' },
    { [styles.list]: displayType === 'list' });

  return (
    <div className={classes}>
      {displayType === 'list'
        ? films.map((film) => (
          <ListItem
            displayType={displayType}
            {...film}
            onShow={onShow}
          />
        ))
        : films.map((film) => (
          <GridItem
            displayType={displayType}
            {...film}
            onShow={onShow}
          />
        ))}
      {loading && <Preloader/>}
    </div>
  );
};

FilmList.propTypes = {
  films: PropTypes.array,
  loading: PropTypes.bool,
  displayType: PropTypes.string,
  onShow: PropTypes.func,
};

FilmList.defaultProps = {};

export default FilmList;
