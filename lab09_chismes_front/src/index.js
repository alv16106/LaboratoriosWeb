
import App from './App';
import * as serviceWorker from './serviceWorker';
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Route, BrowserRouter as Router } from 'react-router-dom'

import './index.css'
import { store } from './store/index.js'
import ChismePage from './components/ChismePage';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path='/' component={App} />
                <Route path='/chisme/:id' component={ChismePage} />
            </div>
            
        </Router>
    </Provider>, 
    document.getElementById('root')
);

serviceWorker.unregister();