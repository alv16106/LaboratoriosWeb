import { createStore } from 'redux';

import reducer from './reducers';


const configureStore = () => {
   /* eslint-disable no-underscore-dangle */
  const store = createStore(
   reducer, /* preloadedState, */
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
 /* eslint-enable */
  return store;
};

export default configureStore;