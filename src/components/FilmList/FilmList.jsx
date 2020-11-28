import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import GridItem from '../GridItem';
import Preloader from '../Preloader';
import ListItem from '../ListItem';
import Dialog from '../Dialog';
import Video from '../Video';
import styles from './FilmList.scss';

const FilmList = ({
  films,
  loading,
  displayType,
}) => {
  const [visibleDialog, setVisibleDialog] = useState(false);

  const openDialogHandler = useCallback(() => {
    setVisibleDialog(true);
  }, [setVisibleDialog]);

  const closeDialogHandler = useCallback(() => {
    setVisibleDialog(false);
  }, [setVisibleDialog]);

  const classes = classNames(styles.filmsContainer,
    { [styles.grid]: displayType === 'grid' },
    { [styles.list]: displayType === 'list' });

  return (
    <div className={classes}>
      <Dialog
        data={1}
        isOpen={visibleDialog}
        onCancel={closeDialogHandler}
      >
        {() => (
          <Video/>
        )}
      </Dialog>
      {displayType === 'list'
        ? films.map((film) => <ListItem displayType={displayType} {...film}/>)
        : films.map((film) => (
          <GridItem
          displayType={displayType}
          {...film}
          onOpen={openDialogHandler}
        />
        ))}
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
