import {applyMiddleware, combineReducers, createStore} from "redux";
import rootSaga from '../Saga';
import authReducer from '../Reducers/auth.reducer';
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

export const rootReducer = combineReducers({
    auth: authReducer
});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
