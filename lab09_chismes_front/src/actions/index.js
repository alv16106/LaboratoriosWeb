import * as types from '../types';
import { call, put } from 'redux-saga/effects'

export const post = (url, payload) => fetch(url, {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(payload)
})

export const get = (url) => fetch(url)
.then(response => response.json())

export const addChisme = (
  id,
  title,
  body,
) => ({
  type: types.CHISME_ADDED_REQUESTED,
  payload: {
    id,
    title,
    body,
  }
});

export const removeChisme = (
  id,
) => ({
  type: types.CHISME_DELETED_REQUESTED,
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
       const chismes = yield call(api, 'http://localhost:8000/api/chisme/');
       yield put({type: types.CHISMES_FETCH_SUCCESS, payload: chismes});
    } catch (e) {
        console.log(e, "lamo")
    }
 }

 export function* deleteChisme(id) {
  try {
     const chismes = yield call(api2, `http://localhost:8000/api/chisme/${id}`);
     console.log(chismes);
     yield put({type: types.CHISME_DELETED_SUCCESS, payload: chismes});
  } catch (e) {
      console.log(e, "lamo")
  }
}