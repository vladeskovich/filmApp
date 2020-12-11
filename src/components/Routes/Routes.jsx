import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import FilmList from '../FilmList';
import styles from './Routes.scss';

const routes = [
  {
    path: '/',
    exact: true,
  },
  {
    path: '/trending',
    exact: true,
  },
  {
    path: '/top-rated',
    exact: true,
  },
  {
    path: '/coming-soon',
    exact: true,
  },
  {
    path: '/genre/:genreId',
    exact: true,
  },
];

const Routes = (props) => (
  <Switch>
    {routes.map((path, index) => (
      <Route
        key={index}
        {...path}
        render={() => <FilmList {...props}/>}
      />
    ))}
  </Switch>
);

Routes.propTypes = {};

Routes.defaultProps = {};

export default Routes;
