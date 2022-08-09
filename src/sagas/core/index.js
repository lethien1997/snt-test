import { all, fork, take, call, apply } from 'redux-saga/effects';
import watchers from './watchers';


export default function* coreSaga() {
  yield all(watchers.map((watcher) => fork(watcher)));
  
  // yield take(actionTypes.LOG_OUT_SUCCESS);
  // yield call(removeAccessToken);
  // yield call(navigate, 'Login');
}
