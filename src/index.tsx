import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux'
import {Provider} from 'react-redux';
import createRouter from "router5";
import {RouterProvider} from "react-router5";
import browserPlugin from 'router5-plugin-browser';

import './index.css';
import App from "./App";
import allReducers from './redux/reducers'
import {loginService} from "./redux/middleware/loginService";
import {routingService} from "./redux/middleware/routingService";
import {router5Middleware} from "redux-router5";

const routes = [
  {name: 'root', path: '/'},
  {name: 'login', path: '/login'}
];

const router = createRouter(routes);
router.usePlugin(browserPlugin());
router.start('/');
const createStoreWithMiddleware = applyMiddleware(
  router5Middleware(router),
  routingService({router}),
  loginService({})
)(createStore);

// @ts-ignore
const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStoreWithMiddleware(
  allReducers,
  enhancer
);

router.navigate('login');

ReactDOM.render(
  <RouterProvider router={router}>
    <Provider store={store}>
      <App/>
    </Provider>
  </RouterProvider>,
  document.getElementById('root')
);
