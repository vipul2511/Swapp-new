// import {createNetworkMiddleware} from 'react-native-offline';
// import {applyMiddleware, compose, createStore} from 'redux';
// import {createLogger} from 'redux-logger';
// // import rootReducer from './index';
// import {createTransform, persistReducer, persistStore} from 'redux-persist';
// import createSensitiveStorage from 'redux-persist-sensitive-storage';
// import createSagaMiddleware from 'redux-saga';
// const sensitiveStorage = createSensitiveStorage({
//   keychainService: 'myKeychain',
//   sharedPreferencesName: 'mySharedPrefs',
// });

// const persistConfig = {
//   key: 'root',
//   version: 0,
//   storage: sensitiveStorage,
//   debug: true,
//   //migrate: createMigrate(migrations, { debug: true }),

//   /**
//    * Blacklist state that we do not need/want to persist
//    */
// };
// export default (rootReducer, rootSaga) => {
//   const middleware = [];
//   const enhancers = [];

//   // Connect the sagas to the redux store
//   const sagaMiddleware = createSagaMiddleware();
//   const networkMiddleware = createNetworkMiddleware({
//     queueReleaseThrottle: 200,
//   });

//   middleware.push(networkMiddleware);
//   middleware.push(sagaMiddleware);

//   enhancers.push(applyMiddleware(...middleware, createLogger()));

//   // Redux persist
//   const persistedReducer = persistReducer(persistConfig, rootReducer);

//   const store = createStore(persistedReducer, compose(...enhancers));
//   const persistor = persistStore(store);

//   // Kick off the root saga
//   sagaMiddleware.run(rootSaga);

//   return {store, persistor};
// };


import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './index';

import {rootSaga} from '../Saga/';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, createLogger()),
);

sagaMiddleware.run(rootSaga);

// Exports
export {store};
