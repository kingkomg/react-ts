import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux'
import {Provider} from 'react-redux';

import './index.css';
import App from "./App";
import allReducers from './redux/reducers'
import {counterMiddleware} from "./redux/middleware/counter.middleware";

const createStoreWithMiddleware = applyMiddleware(
  counterMiddleware({})
)(createStore);

// @ts-ignore
const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStoreWithMiddleware(
  allReducers,
  enhancer
);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
