import React from 'react';
import { hot } from 'react-hot-loader';
import styles from './App.scss';
import Slider from '../../components/Slider';

const App = () => (
  <div className={styles.appWrapper}>
    <Slider/>
  </div>
);

export default hot(module)(App);
