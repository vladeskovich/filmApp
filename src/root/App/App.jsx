import React, { useEffect } from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import Slider from '../../components/Slider';
import AppMain from '../../components/AppMain';
import { initializeFilms } from '../../store/actions/films';
import styles from './App.scss';

const mapDispatchToProps = (dispatch) => ({
  initializeFilms: () => {
    dispatch(initializeFilms());
  },
}
);

const App = ({
  initializeFilms,
}) => {
  useEffect(() => {
    initializeFilms();
    window.addEventListener('scroll', (event) => {
      if (Math.round(window.scrollY + window.innerHeight) === document.body.scrollHeight) {
        initializeFilms();
      }
    });
  }, []);

  return (
    <div className={styles.appWrapper}>
      <Slider/>
      <AppMain/>
    </div>
  );
};

export default hot(module)(connect(null, mapDispatchToProps)(App));
