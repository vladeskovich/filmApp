import React, { useState } from 'react';
import { connect } from 'react-redux';
import FilmNavigation from '../FilmNavigation';
import FilmList from '../FilmList';
import Preloader from '../Preloader';
import styles from './AppMain.scss';

const mapStateToProps = (state) => ({
  films: state.films.films,
  loading: state.films.loading,
});

const AppMain = ({
  films,
  loading,
}) => {
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
  const [displayType, changeDisplayType] = useState({ grid: true, list: false });

  return (
    <div className={styles.appMain}>
      <div className={styles.appMainContent}>
        <FilmNavigation
          genres={genres}
          displayType={displayType}
          changeDisplayType={changeDisplayType}
        />
        {films.length !== 0
          ? <FilmList
            films={films}
            loading={loading}
            displayType={displayType}
          />
          : <Preloader/>
        }

      </div>
    </div>
  );
};

export default connect(mapStateToProps, null)(AppMain);
