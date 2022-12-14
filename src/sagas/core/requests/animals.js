import { put, call } from 'redux-saga/effects';
import api from '../../../api';
import {
  getAnimalsFail,
  getAnimalsSuccess,
} from '../../../redux/action';
import { getAccessToken } from '../../../util/localStorage';

export function* onGetAnimalsRequest() {
  try {
    const { animals, pagination } = yield call(api.getAnimalsApi);

    const action = getAnimalsSuccess(animals, pagination);
    yield put(action);
    return {
      success: true,
      payload: action.payload,
    };
  } catch (error) {
    const action = getAnimalsFail(error);
    yield put(action);

    return {
      success: false,
      payload: action.payload,
    };
  }
  // }
}
