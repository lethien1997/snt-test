import { all, takeLatest } from 'redux-saga/effects';
import actionTypes from '../../../contants/actionTypes';
import { onGetAnimalsRequest } from '../requests';

export default function* boardWatchers() {
  yield all([
    takeLatest(actionTypes.GET_ANIMALS_REQUEST,  onGetAnimalsRequest),
  ]);
}
