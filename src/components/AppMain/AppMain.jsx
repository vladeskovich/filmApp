import React from 'react';
import { connect } from 'react-redux';
import FilmNavigation from '../FilmNavigation';
import FilmList from '../FilmList';
import Preloader from '../Preloader';
import styles from './AppMain.scss';

const mapStateToProps = (state) => ({
  films: state.films.films,
});

const mapDispatchToProps = (dispatch) => ({}
);

const AppMain = ({
  films,
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
  return (
    <div className={styles.appMain}>
      <div className={styles.appMainContent}>
        <FilmNavigation
          genres={genres}
        />
        {films.length !== 0
          ? <FilmList
            films={films}
          />
          : <Preloader/>
        }

      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AppMain);
