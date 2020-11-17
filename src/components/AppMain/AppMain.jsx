import React, { useState } from 'react';
import styles from './AppMain.scss';
import FilmNavigation from '../FilmNavigation';

const AppMain = () => {
  const genres = [
    {
      id: 28,
      name: 'Action',
    },
    {
      id: 12,
      name: 'Adventure',
    },
    {
      id: 16,
      name: 'Animation',
    },
    {
      id: 35,
      name: 'Comedy',
    },
    {
      id: 80,
      name: 'Crime',
    },
    {
      id: 82,
      name: 'Crime',
    },
  ];

  return (
    <div className={styles.appMain}>
      <div className={styles.appMainContent}>
          <FilmNavigation
            genres={genres}
          />
      </div>
    </div>
  );
};

export default AppMain;
