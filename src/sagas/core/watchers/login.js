import { all, takeLatest } from 'redux-saga/effects';
import actionTypes from '../../../contants/actionTypes';
import { loginAccountService } from '../services/login';

export default function* loginWatchers() {
  yield all([
    takeLatest(actionTypes.LOGIN_REQUEST, ({ payload: { formData } }) =>
      loginAccountService(formData)
    ),
  ]);
}
