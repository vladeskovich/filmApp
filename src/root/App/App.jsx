import React, { useCallback, useEffect, useState } from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import Slider from '../../components/Slider';
import { initializeFilms } from '../../store/actions/films';
import Video from '../../components/Video';
import Dialog from '../../components/Dialog';
import Footer from '../../components/Footer';
import { getVideos, resetVideo } from '../../store/actions/video';
import { initializeGenres } from '../../store/actions/genres';
import FilmNavigation from '../../components/FilmNavigation';
import FilmList from '../../components/FilmList';
import Preloader from '../../components/Preloader';
import styles from './App.scss';

const mapStateToProps = (state) => ({
  videos: state.videos.videos,
  films: state.films.films,
  loading: state.films.loading,
  genres: state.genres.genres,
});

const mapDispatchToProps = (dispatch) => ({
  initializeFilms: () => {
    dispatch(initializeFilms());
  },
  getVideos: (id) => {
    dispatch(getVideos(id));
  },
  resetVideo: (resetData) => {
    dispatch(resetVideo(resetData));
  },
  initializeGenres: () => {
    dispatch(initializeGenres());
  },
}
);

const App = ({
  initializeFilms,
  initializeGenres,
  getVideos,
  resetVideo,
  videos,
  films,
  loading,
  genres,
}) => {
  const [visibleDialog, setVisibleDialog] = useState(false);
  const [displayType, changeDisplayType] = useState('grid');

  useEffect(() => {
    initializeFilms();
    initializeGenres();
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

  return (
    <div className={styles.appWrapper}>
      <Slider onShow={toogleDialogHandler}/>
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
      <Footer/>
      <Dialog
        data={videos}
        isOpen={visibleDialog}
        onCancel={toogleDialogHandler}
        onReset={resetVideo}
      >
        <Video/>
      </Dialog>
    </div>
  );
};

export default hot(module)(connect(mapStateToProps, mapDispatchToProps)(App));
