import { combineReducers } from 'redux'
import * as types from '../types'

const byId = (state = {}, action) => {
  switch (action.type) {
    case types.CHISME_ADDED_SUCCESS: {
      const { id } = action.payload;
      return {
        ...state,
        [id]: action.payload,
      };
    }
    case types.CHISMES_FETCH_SUCCESS: {
      const newState = {}
      action.payload.forEach(element => {
        const { id } = element;
        newState[id] = element;
      });
      return {
        ...state,
        ...newState
      }
    }
    default: return state;
  }
}

const order = (state = [], action) => {
  switch (action.type) {
    case types.CHISME_ADDED_SUCCESS: {
      const { id } = action.payload;
      return [
        ...state,
        id,
      ];
    }
    case types.CHISMES_FETCH_SUCCESS: {
      const newState = []
      action.payload.forEach(element => {
        newState.push(element.id);
      });
      return [
        ...state,
        ...newState
      ]
    }
    default: return state;
  }
}

const rootReducer = combineReducers({
  byId,
  order
})

export default rootReducer


export const getChisme = (state, id) => state.byId[id];
export const getChismes = (state) => state.order.map(
  id => getChisme(state, id),
);