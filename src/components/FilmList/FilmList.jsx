import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import GridItem from '../GridItem';
import Preloader from '../Preloader';
import ListItem from '../ListItem';
import List from '../List';
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
    <>
      {displayType === 'list'
        ? <List
          data={films}
          direction="horizontal"
          ordered={false}
          itemClassName={styles.filmsContainerFlex}
          className={classes}
        >
          {(film) => (
            <ListItem
              {...film}
              displayType={displayType}
              onShow={onShow}
            />
          )}
        </List>
        : <List
          data={films}
          direction="horizontal"
          ordered={false}
          itemClassName={styles.filmsContainerFlex}
          className={classes}
        >
          {(film) => (
            <GridItem
              {...film}
              displayType={displayType}
              onShow={onShow}
            />
          )}
        </List>
      }
      {loading && <Preloader/>}
    </>
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
