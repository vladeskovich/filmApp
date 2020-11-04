import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers/redux-index';

export default function makeStore() {
  const store = createStore(reducers, applyMiddleware(thunkMiddleware));

  if (module.hot) {
    module.hot.accept('./reducers/redux-index', () => {
      store.replaceReducer(reducers);
    });
  }

  return store;
}
