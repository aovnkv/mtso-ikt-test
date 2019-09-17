import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import './index.css';
import App from './App';

import reduce from './store/reducers';

const logger = createLogger();
const store = createStore(
  //     // combineReducers({ reduce }),
  reduce,
  applyMiddleware(thunk, logger)
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
