import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { compose } from 'redux';
import { connect } from 'react-redux';
import GridItem from '../GridItem';
import Preloader from '../Preloader';
import ListItem from '../ListItem';
import List from '../List';
import styles from './FilmList.scss';

const mapStateToProps = (state) => ({
  films: state.films.films,
  loading: state.films.loading,
});

const FilmList = ({
  films,
  loading,
  displayType,
  onShow,
}) => {
  const classes = classNames(styles.filmsContainer,
    { [styles.grid]: displayType === 'grid' },
    { [styles.list]: displayType === 'list' });
  debugger;
  const renderList = useCallback((ItemComponent) => (
      <List
        data={films}
        direction="horizontal"
        itemClassName={styles.filmsContainerFlex}
        className={classes}
      >
        {(film) => (
          <ItemComponent
            {...film}
            displayType={displayType}
            onShow={onShow}
          />
        )}
      </List>
  ), [films, displayType, onShow, classes]);

  return (
    <>
      {displayType === 'list'
        ? renderList(ListItem)
        : renderList(GridItem)
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

export default compose(
  connect(mapStateToProps, null),
)(FilmList);
