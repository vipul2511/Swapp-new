import {call, put, takeEvery} from '@redux-saga/core/effects';
import * as wording from '../Services/auth.service';

function* sendwording(action) {
  try {
    //   yield put(setLoaderTrue());
    console.log('------------------------');
    console.log(action.data);
    console.log('------------------------');
    // let {data} = yield call(wording.sendwording, action.data);
    console.log('data from server2');
    // console.log(data);
    //   yield put(setCodeSuccess(action.data.email));
    // yield put({type: 'SETWORDING', DATA: data});
  } catch (error) {
    console.log('error');
    // console.log(error.response.data);
  }
}

export default function* watchwording() {
  yield takeEvery('SEND_WORDING', sendwording);
}
