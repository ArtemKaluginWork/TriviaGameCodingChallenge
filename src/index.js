import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
