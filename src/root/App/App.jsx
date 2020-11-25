import React from 'react';
import { hot } from 'react-hot-loader';
import Slider from '../../components/Slider';
import Dialog from '../../components/Dialog';
import styles from './App.scss';

const App = () => (
  <div className={styles.appWrapper}>
    <Slider/>
    <Dialog/>
  </div>
);

export default hot(module)(App);
