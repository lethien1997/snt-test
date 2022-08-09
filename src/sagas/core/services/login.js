import { call, put } from 'redux-saga/effects';
import { removeAccessToken } from '../../../util/localStorage';
import { onLoginRequest } from '../requests';

// export function* logoutService() {
//   yield put(logoutSuccess());
//   yield call(removeAccessToken);
// }

export function* loginAccountService(data) {
  console.log('loginAccountService')
  yield call(onLoginRequest, data);
}
