import { takeLatest } from 'redux-saga/effects'

import * as types from '../types'
import { fetchChismes, deleteChisme } from '../actions' 

function* fetchAllSaga() {
  yield takeLatest(types.CHISMES_FETCH_REQUESTED, fetchChismes);
}

function* deleteOneSaga() {
  yield takeLatest(types.CHISME_DELETED_REQUESTED, deleteChisme);
}

export default fetchAllSaga