import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import App from './components/App/App';
import configureStore from './store/configureStore';
import 'styles/index.scss';

const store = configureStore();

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('root'),
  );
};

if (module.hot) {
  module.hot.accept(() => render());
}

render();
