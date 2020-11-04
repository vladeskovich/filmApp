import { combineReducers } from 'redux';
import appReducer from './app-reducer';

const reducers = combineReducers({
  appMain: appReducer,
});

export default reducers;
