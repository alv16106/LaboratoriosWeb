import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducer from '../reducers'
import fetchAllSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
  /* compose (
    applyMiddleware(sagaMiddleware),  
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ) */
)

sagaMiddleware.run(fetchAllSaga)
