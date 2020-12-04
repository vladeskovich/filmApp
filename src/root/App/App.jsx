import React, { useCallback, useEffect, useState } from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import Slider from '../../components/Slider';
import { initializeFilms } from '../../store/actions/films';
import Video from '../../components/Video';
import Dialog from '../../components/Dialog';
import { getVideos } from '../../store/actions/video';
import FilmNavigation from '../../components/FilmNavigation';
import FilmList from '../../components/FilmList';
import Preloader from '../../components/Preloader';
import styles from './App.scss';

const mapStateToProps = (state) => ({
  videos: state.videos.videos,
  films: state.films.films,
  loading: state.films.loading,
});

const mapDispatchToProps = (dispatch) => ({
  initializeFilms: () => {
    dispatch(initializeFilms());
  },
  getVideos: (id) => {
    dispatch(getVideos(id));
  },
}
);

const App = ({
  initializeFilms,
  getVideos,
  videos,
  films,
  loading,
}) => {
  debugger;
  const [visibleDialog, setVisibleDialog] = useState(false);
  const [displayType, changeDisplayType] = useState('grid');

  const genres = [
    {
      id: 28,
      name: 'Action',
    },
    {
      id: 12,
      name: 'Adventure',
    },
    {
      id: 16,
      name: 'Animation',
    },
    {
      id: 35,
      name: 'Comedy',
    },
    {
      id: 80,
      name: 'Crime',
    },
    {
      id: 82,
      name: 'Crime',
    },
  ];

  useEffect(() => {
    initializeFilms();
    window.addEventListener('scroll', (event) => {
      if (Math.round(window.scrollY + window.innerHeight) === document.body.scrollHeight) {
        initializeFilms();
      }
    });
  }, []);

  const toogleDialogHandler = useCallback((event) => {
    const { target: { dataset: { itemId } } } = event;
    const newVisibleDialog = !visibleDialog;
    if (newVisibleDialog) {
      getVideos(itemId);
    }
    setVisibleDialog(newVisibleDialog);
  }, [setVisibleDialog, visibleDialog, getVideos]);
  console.log(111);
  return (
    <div className={styles.appWrapper}>
      <Slider/>
      <div className={styles.appMain}>
        <div className={styles.appMainContent}>
          <FilmNavigation
            genres={genres}
            displayType={displayType}
            changeDisplayType={changeDisplayType}
          />
          {films.length !== 0
            ? <FilmList
              films={films}
              loading={loading}
              displayType={displayType}
              onShow={toogleDialogHandler}
            />
            : <Preloader/>
          }
        </div>
      </div>
      <Dialog
        data={videos}
        isOpen={visibleDialog}
        onCancel={toogleDialogHandler}
      >
        <Video/>
      </Dialog>
    </div>
  );
};

export default hot(module)(connect(mapStateToProps, mapDispatchToProps)(App));
