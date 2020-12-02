import React, { useCallback, useEffect, useState } from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import Slider from '../../components/Slider';
import AppMain from '../../components/AppMain';
import { initializeFilms } from '../../store/actions/films';
import Video from '../../components/Video';
import Dialog from '../../components/Dialog';
import { getVideos } from '../../store/actions/video';
import styles from './App.scss';

const mapStateToProps = (state) => ({
  videos: state.videos.videos,
  loadingVideo: state.videos.loadingVideo,
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
  loadingVideo,
}) => {
  // debugger;
  useEffect(() => {
    initializeFilms();
    window.addEventListener('scroll', (event) => {
      if (Math.round(window.scrollY + window.innerHeight) === document.body.scrollHeight) {
        initializeFilms();
      }
    });
  }, []);

  const [visibleDialog, setVisibleDialog] = useState(false);
  const { key: videoKey } = videos[0] || 1;

  console.log(visibleDialog);
  const toogleDialogHandler = useCallback((event) => {
    const { target: { dataset: { itemId } } } = event;
    console.log('123');
    toogleDialogHandler();
    getVideos(itemId);
  }, [setVisibleDialog, visibleDialog, getVideos]);

  return (
    <div className={styles.appWrapper}>
      <Slider/>
      <AppMain showDialogHandler={toogleDialogHandler}/>
      <Dialog
        loadingVideo={loadingVideo}
        data={videoKey}
        isOpen={visibleDialog}
        onCancel={toogleDialogHandler}
      >
        <Video/>
      </Dialog>
    </div>
  );
};

export default hot(module)(connect(mapStateToProps, mapDispatchToProps)(App));
