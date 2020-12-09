import React, { useCallback, useEffect, useState } from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import { useLocation, useRouteMatch } from 'react-router-dom';
import Slider from '../../components/Slider';
import { getFilms, resetFilms } from '../../store/actions/films';
import Video from '../../components/Video';
import Dialog from '../../components/Dialog';
import Footer from '../../components/Footer';
import { getVideos, resetVideo } from '../../store/actions/video';
import { getGenres } from '../../store/actions/genres';
import FilmNavigation from '../../components/FilmNavigation';
import styles from './App.scss';
import Routes from '../../components/Routes';

const mapStateToProps = (state) => ({
  videos: state.videos.videos,
  genres: state.genres.genres,
});

const mapDispatchToProps = (dispatch) => ({
  getFilms: (pathname, routeParam) => {
    dispatch(getFilms(pathname, routeParam));
  },
  resetFilms: () => {
    dispatch(resetFilms());
  },
  getVideos: (id) => {
    dispatch(getVideos(id));
  },
  resetVideo: () => {
    dispatch(resetVideo());
  },
  getGenres: () => {
    dispatch(getGenres());
  },
}
);

const App = ({
  getFilms,
  getGenres,
  resetFilms,
  getVideos,
  resetVideo,
  videos,
  genres,
}) => {
  const { pathname } = useLocation();
  const routeParam = useRouteMatch('/genre/:genreId');
  debugger;
  const [visibleDialog, setVisibleDialog] = useState(false);
  const [displayType, changeDisplayType] = useState('grid');

  const checkEndPage = () => {
    if (Math.round(window.scrollY + window.innerHeight + 1) === document.body.scrollHeight) {
      debugger;
      getFilms(pathname, routeParam);
    }
  };

  useEffect(() => {
    getFilms(pathname, routeParam);
    getGenres();
    window.addEventListener('scroll', checkEndPage);

    return () => {
      resetFilms();
      window.removeEventListener('scroll', checkEndPage);
    };
  }, [pathname]);

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
          <Routes
            displayType={displayType}
            onShow={toogleDialogHandler}
          />
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
