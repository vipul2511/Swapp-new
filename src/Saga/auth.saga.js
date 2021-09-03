import {call, put, takeEvery} from '@redux-saga/core/effects';
import * as auth from '../Services/auth.service';
import {
  setCodeError,
  setCodeSuccess,
  setEmailError,
  setEmailSuccess,
  setLoaderTrue,
} from '../Actions/auth.actions';

function* sendEmail(action) {
  try {
    yield put(setLoaderTrue());
    console.log(action.data);
    let {data} = yield call(auth.sendEmail, action.data);
    console.log('data from server');
    console.log(data);
    yield put(setEmailSuccess(action.data.email));
  } catch (error) {
    console.log('error');
    console.log(error.response.data);
    yield put(setEmailError(error.response.data));
    //yield put(setLoaderToFalse());
  }
}

function* sendCode(action) {
  try {
    yield put(setLoaderTrue());
    console.log(action.data);
    let {data} = yield call(auth.sendCode, action.data);
    console.log('data from server2');
    console.log(data);
    yield put(setCodeSuccess(action.data.email));
  } catch (error) {
    console.log('error');
    console.log(error.response.data);
    yield put(setCodeError(error.response.data));
  }
}

export default function* watchLogin() {
  yield takeEvery('SEND_EMAIL', sendEmail);
  yield takeEvery('SEND_CODE', sendCode);
}
