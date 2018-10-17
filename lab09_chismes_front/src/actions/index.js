import * as types from '../types';
import { call, put } from 'redux-saga/effects'

export const api = (url) => fetch(url).then(response => response.json())

export const addChisme = (
  id,
  title,
  body,
) => ({
  type: types.CHISME_ADDED,
  payload: {
    id,
    title,
    body,
  }
});

export const removeChisme = (
  id,
) => ({
  type: types.CHISME_DELETED,
  payload: {
    id
  }
})

export const updateChisme = (
  id,
  newTitle,
  newBody,
  ) => ({
    type: types.CHISME_UPDATED,
    payload: {
      id,
      newTitle,
      newBody,
    }
  })

export const fetchChismesRequest = (
  ) => ({
    type: types.CHISMES_FETCH_REQUESTED,
  });

  export function* fetchChismes(action) {
    try {
       const chismes = yield call(api, 'localhost:8000/api/chisme');
       yield put({type: types.CHISMES_FETCH_SUCCESS, data: chismes.results});
    } catch (e) {
        console.log(e)
    }
 }