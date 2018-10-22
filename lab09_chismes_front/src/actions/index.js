import * as types from '../types';
import { call, put } from 'redux-saga/effects'  

export const change = (url, method, body) => fetch(url, {
  method: method,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: body ? JSON.stringify(body) : {}
})
.then(response => method!='DELETE' ? response.json(): response)

export const get = (url) => fetch(url)
.then(response => response.json())

export const addChismeRequest = ({
  id,
  title,
  content,
}) => ({
  type: types.CHISME_ADDED_REQUESTED,
  payload: {
    id,
    title,
    content,
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

export const requestChisme = (
  id
  ) => ({
    type: types.CHISME_REQUESTED,
    payload: {
      id
    }
  })

export const fetchChismesRequest = (
  ) => ({
    type: types.CHISMES_FETCH_REQUESTED,
  });

export function* fetchChismes(action) {
  console.log(action);
  try {
    const chismes = yield call(get, 'http://localhost:8000/api/chisme/');
    yield put({type: types.CHISMES_FETCH_SUCCESS, payload: chismes});
  } catch (e) {
    console.log(e, "lamo")
  }
 }

 export function* getChisme(action) {
  console.log(action);
  try {
    const chisme = yield call(get, `http://localhost:8000/api/chisme/${action.payload.id}/`);
    yield put({type: types.CHISME_REQUESTED_SUCCESS, payload: chisme});
  } catch (e) {
    console.log(e, "lamo")
  }
 }

export function* deleteChisme(action) {
  console.log(action);
  try {
     const deleted = yield call(change, `http://localhost:8000/api/chisme/${action.payload.id}/`, 'DELETE');
     console.log(deleted);
     yield put({type: types.CHISME_DELETED_SUCCESS, payload: action.payload.id});
  } catch (e) {
      console.log(e, "lamo")
  }
}

export function* addChisme(action) {
  console.log(action);
  try {
    const added = yield call(change, `http://localhost:8000/api/chisme/`, 'POST', {title: action.payload.title, content: action.payload.content});
    console.log(added);
    yield put({type: types.CHISME_ADDED_SUCCESS, payload: {oldID: action.payload.id, ...added}});
 } catch (e) {
     console.log(e, "lamo")
 }
}