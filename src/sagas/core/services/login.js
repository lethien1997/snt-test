import { call} from 'redux-saga/effects';
import { onLoginRequest } from '../requests';



export function* loginAccountService(data) {
  yield call(onLoginRequest, data);
}
