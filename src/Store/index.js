// import {combineReducers} from 'redux';
// import configureStore from './CreateStore';
// import {reducer as network} from 'react-native-offline';
// import rootSaga from '../Saga/Loginsaga';
// import Loginreducer from '../Saga/Loginreducer';
// export default () => {
//   const rootReducer = combineReducers({
//     network: network,
//     Login: Loginreducer,
//   });

//   //   return configureStore(rootReducer, rootSaga);
// };

//combine reducer
import {combineReducers} from 'redux';

// import CounterReducer from './Counterreducer';
import Loginreducer from '../Saga/Loginreducer';

const rootreducer = combineReducers({
  Login: Loginreducer,
});
export default rootreducer;
