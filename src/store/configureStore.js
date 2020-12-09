import { applyMiddleware, createStore, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';

export default function configureStore() {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

  if (module.hot) {
    module.hot.accept('./reducers/index', () => {
      store.replaceReducer(reducers);
    });
  }

  return store;
}
