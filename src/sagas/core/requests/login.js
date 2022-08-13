import { call, put } from 'redux-saga/effects';
import api from '../../../api';
import { loginError, loginFail, loginSuccess } from '../../../redux/action';
import { setAccessToken } from '../../../util/localStorage';

export function* onLoginRequest(data) {
  try {
    const response = yield call(api.loginApi, data);
    
    if (response.message) {
      const action = loginError(response.message);
      yield put(action);
    } else {
      const { access_token } = response;
      const action = loginSuccess(access_token);
      yield put(action);
      yield call(setAccessToken, access_token);
    }
  } catch (error) {
    const action = loginFail(error);
    yield put(action);

    return {
      success: false,
      payload: action.payload,
    };
  }
}
