import { all, call, cancel, fork, take } from 'redux-saga/effects';
import { onGetAnimalsRequest } from './requests';
import watchers from './watchers';
import actionTypes from '../../contants/actionTypes';
import { setAccessToken } from '../../util/localStorage';


export default function* coreSaga() {
   yield all(watchers.map((watcher) => fork(watcher)));

  // const {
  //   payload: { accessToken },
  // } = yield take(actionTypes.AUTHENTICATE_SUCCEEDED);

  // yield cancel(watcherTasks);

  // yield call(setAccessToken, accessToken);
  // yield fork(onGetAnimalsRequest);
  
  // yield take(actionTypes.LOG_OUT_SUCCESS);
  // yield call(removeAccessToken);
  // yield call(navigate, 'Login');
}
