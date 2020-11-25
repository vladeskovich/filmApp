import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './root/App/App';
import configureStore from './store/configureStore';
import 'styles/index.scss';

const store = configureStore();

const render = () => {
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App/>
      </Provider>
    </BrowserRouter>,
    document.getElementById('root'),
  );
};

if (module.hot) {
  module.hot.accept(() => render());
}

render();
