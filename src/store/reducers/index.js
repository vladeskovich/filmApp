import { combineReducers } from 'redux';
import films from './films';
import genres from './genres';
import fetch from './fetch';

const reducers = combineReducers({
  films,
  genres,
  fetch,
});

export default reducers;
