import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import FilmList from '../FilmList';
import styles from './Routes.scss';

const pathes = [
  {
    path: '/',
    exact: true,
  },
  {
    path: '/popular',
    exact: true,
  },
  {
    path: '/top_rated',
    exact: true,
  },
  {
    path: '/upcoming',
    exact: true,
  },
  {
    path: '/genre/:genreId?',
    exact: true,
  },
];

const Routes = (props) => (
  <Switch>
    {pathes.map((path) => (
      <Route {...path} render={() => <FilmList {...props}/>}/>
    ))}
  </Switch>
);

Routes.propTypes = {};

Routes.defaultProps = {};

export default Routes;
