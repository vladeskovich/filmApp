import React from 'react';
import FilmNavigation from '../FilmNavigation';
import FilmItem from '../FilmItem';
import styles from './AppMain.scss';

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
          <FilmItem/>
      </div>
    </div>
  );
};

export default AppMain;
