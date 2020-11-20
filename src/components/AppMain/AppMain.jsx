import React from 'react';
import { connect } from 'react-redux';
import FilmNavigation from '../FilmNavigation';
import FilmItem from '../FilmItem';
import FilmList from '../FilmList';
import { initializeFilms } from '../../store/actions/films';
import Preloader from '../Preloader';
import styles from './AppMain.scss';

const mapStateToProps = (state) => ({
  films: state.films.films,
});

const mapDispatchToProps = (dispatch) => ({
}
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
  debugger;
  return (
    <div className={styles.appMain}>
      <div className={styles.appMainContent}>
          <FilmNavigation
            genres={genres}
          />
          {/* <FilmItem/> */}
          {/* <FilmList films={films}/> */}
          <Preloader/>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AppMain);
