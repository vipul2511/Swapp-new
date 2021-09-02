import { takeEvery, put, delay, call, all } from "redux-saga/effects";
import authSaga from './auth.saga';

export default function* root() {
    yield all([authSaga()]);
}
