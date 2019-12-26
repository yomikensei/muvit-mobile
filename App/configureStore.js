import { applyMiddleware, createStore } from 'redux';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';


import startsWith from 'lodash/startsWith';
import { createLogger } from 'redux-logger';

import rootSaga from './rootSaga';
import rootReducer from './rootReducer';
// import { clearState } from './localStorage';

const middlewares = [];

const reactNavigationReduxMiddleware = createReactNavigationReduxMiddleware(
  state => state.nav,
);

const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

middlewares.push(reactNavigationReduxMiddleware);

if (process.env.NODE_ENV === 'development') {
  const logger = createLogger({
    collapsed: true,
    predicate: (getState, action) => !startsWith(action.type, '@@redux-form'),
  });
  middlewares.push(logger);
}

const configureStore = () => {
  const store = createStore(rootReducer, applyMiddleware(...middlewares));

  const persistor = persistStore(store);
  // Please if you feel the need to remove the next line
  // please just comment it out
  // persistor.purge();
  // clearState();

  sagaMiddleware.run(rootSaga);
  return {
    persistor,
    store,
  };
};

export default configureStore;
