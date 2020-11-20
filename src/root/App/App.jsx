import React from 'react';
import { hot } from 'react-hot-loader';
import Slider from '../../components/Slider';
import AppMain from '../../components/AppMain';
import styles from './App.scss';

window.addEventListener('scroll', (event) => {
  if (Math.round(window.scrollY + window.innerHeight) === document.body.scrollHeight) {
    alert('konez');
  }
});

const App = () => (
  <div className={styles.appWrapper}>
    <Slider/>
    <AppMain/>
  </div>
);

export default hot(module)(App);
