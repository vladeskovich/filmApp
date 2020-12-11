import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import NotFound from '../NotFound';
import FilmList from '../FilmList';
import styles from './Routes.scss';

const routes = [
  {
    path: '/',
    exact: true,
    component: FilmList,
  },
  {
    path: '/trending',
    exact: true,
    component: FilmList,
  },
  {
    path: '/top-rated',
    exact: true,
    component: FilmList,
  },
  {
    path: '/coming-soon',
    exact: true,
    component: FilmList,
  },
  {
    path: '/genre/:genreId',
    exact: true,
    component: FilmList,
  },
  {
    component: NotFound,
  },
];

const Routes = (props) => (
  <Switch>
    {routes.map(({ component: Component, ...route }, index) => (
      <Route
        key={index}
        {...route}
        render={() => <Component {...props}/>}
      />
    ))}
  </Switch>
);

Routes.propTypes = {};

Routes.defaultProps = {};

export default Routes;
