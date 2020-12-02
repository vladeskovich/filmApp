import { combineReducers } from 'redux';
import films from './films';
import genres from './genres';
import videos from './video';

const reducers = combineReducers({
  films,
  genres,
  videos,
});

export default reducers;
