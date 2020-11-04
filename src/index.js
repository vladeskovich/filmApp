import React from 'react';
import ReactDOM from 'react-dom';

import App from 'components/App';
import { Provider } from 'react-redux';
import makeStore from './store/redux-store';
import 'styles/index.scss';

const render = () => {
  ReactDOM.render(
    <Provider store={makeStore()}>
      <App/>
    </Provider>,
    document.getElementById('root'),
  );
};

if (module.hot) {
  module.hot.accept(() => render());
}
