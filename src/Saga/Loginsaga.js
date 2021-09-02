import {call, put, takeLatest} from 'redux-saga/effects';
import {LOGINACTION} from './action';
import {http} from '../utils/http';
console.log('=============');
function* Login({payload}) {
  try {
    console.log('=============');
    let LoginData = yield call(http.Login, payload);
    // console.log(value + '--');

    yield put({type: 'LOGINACTION', value: 44});
  } catch (error) {
    console.log(error);
  }
}

export function* watchLogin() {
  yield takeLatest('LOGINACTION', Login);
}
