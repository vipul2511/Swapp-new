import {takeEvery, put, delay, call, all} from 'redux-saga/effects';
import authSaga from './auth.saga';
import wording from './wording.saga';

export default function* root() {
  yield all([authSaga()]);  yield all([wording()]);
}
