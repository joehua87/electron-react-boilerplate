// @flow
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from 'routes';
import configureStore from 'store/configureStore';
import { selectLocationState } from 'containers/App/selectors';
import './app.global.css';

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store, {
  selectLocationState: selectLocationState(),
});

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
