import { put, call, delay } from 'redux-saga/effects';
import api from '../../../api';
import { getAnimalsFail, getAnimalsSuccess } from '../../../redux/action';

export function* onGetAnimalsRequest() {
  try {
    const animals = yield call(api.getAnimalsApi);
    const action = getAnimalsSuccess(animals);
    yield put(action);
    // yield delay(5000);
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
}
