import { combineReducers } from 'redux';
import films from './films';
import genres from './genres';

const reducers = combineReducers({
  films,
  genres,
});

export default reducers;
