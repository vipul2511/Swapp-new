import { combineReducers } from "redux";
import configureStore from "./CreateStore";
import { reducer as network } from "react-native-offline";
import rootSaga from '../Saga';
export default () => {
    const rootReducer = combineReducers({
    network: network,
});

return configureStore(rootReducer, rootSaga);
};