
import App from './App';
import * as serviceWorker from './serviceWorker';
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import './index.css'
import { store } from './store/index.js'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

serviceWorker.unregister();