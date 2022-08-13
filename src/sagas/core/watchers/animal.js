import { all, takeLatest } from 'redux-saga/effects';
import actionTypes from '../../../contants/actionTypes';
import { onGetAnimalItemRequest } from '../requests';

export default function* animalsWatchers() {
  yield all([
    takeLatest(actionTypes.GET_ANIMAL_ITEM_REQUEST, onGetAnimalItemRequest),
  ]);
}
