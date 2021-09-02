import {all, fork} from 'redux-saga/effects';
import {watchLogin} from './Loginsaga';

export function* rootSaga() {
  yield all(fork(watchLogin));
}
