import React from 'react';
import { hot } from 'react-hot-loader';
import Slider from '../../components/Slider';
import Portal from '../../components/Portal';
import styles from './App.scss';

const App = () => (
  <div className={styles.appWrapper}>
    <Slider/>

  </div>
);

export default hot(module)(App);
