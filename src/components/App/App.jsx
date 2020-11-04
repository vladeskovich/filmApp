import React from 'react';
import { hot } from 'react-hot-loader';
import Test from '../Test';
import styles from './App.scss';

const App = () => (
  <div className={styles.appWrapper}>
    <Test/>
  </div>
);

export default hot(module)(App);
