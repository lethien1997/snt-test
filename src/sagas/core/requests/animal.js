import { put, call } from 'redux-saga/effects';
import api from '../../../api';
import {
  getAnimalsItemFail,
  getAnimalsItemSuccess,
} from '../../../redux/action';

import { getAccessToken } from '../../../util/localStorage';

export function* onGetAnimalItemRequest({ payload }) {
  try {
    const { animal } = yield call(api.getAnimalItemApi, payload.id);
    const action = getAnimalsItemSuccess(animal);
    yield put(action);
    return {
      success: true,
      payload: action.payload,
    };
  } catch (error) {
    const action = getAnimalsItemFail(error);
    yield put(action);

    return {
      success: false,
      payload: action.payload,
    };
  }
}
