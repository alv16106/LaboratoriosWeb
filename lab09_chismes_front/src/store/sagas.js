import { takeLatest } from 'redux-saga/effects'

import * as types from '../types'
import { fetchChismes, deleteChisme, addChisme, getChisme } from '../actions' 

export function* fetchAllSaga() {
  yield takeLatest(types.CHISMES_FETCH_REQUESTED, fetchChismes);
  yield takeLatest(types.CHISME_DELETED_REQUESTED, deleteChisme);
  yield takeLatest(types.CHISME_ADDED_REQUESTED, addChisme);
  yield takeLatest(types.CHISME_REQUESTED, getChisme);
}

export default fetchAllSaga;