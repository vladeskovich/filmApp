import React from 'react';
import { hot } from 'react-hot-loader';
import Slider from '../../components/Slider';
import AppMain from '../../components/AppMain';
import styles from './App.scss';

const App = () => (
  <div className={styles.appWrapper}>
    <Slider/>
    <AppMain/>
  </div>
);

export default hot(module)(App);
