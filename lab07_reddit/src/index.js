import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import registerServiceWorker from './registerServiceWorker';
import RedditApp from './components/RedditApp';

import configureStore from './configureStore';

import './index.css'

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <RedditApp></RedditApp>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
