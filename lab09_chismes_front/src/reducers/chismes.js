import { combineReducers } from 'redux'
import * as types from '../types'

const byId = (state = {}, action) => {
  switch (action.type) {
    case types.CHISME_ADDED_REQUESTED: {
      const { id } = action.payload;
      return {
        ...state,
        [id]: action.payload,
      };
    }
    case types.CHISME_ADDED_SUCCESS: {
      console.log(action.payload);
      const { oldID, id } = action.payload;
      const newState = { ...state };
      delete newState[oldID];
      newState[id] = {...state[oldID], id:id, confirmed: true};
      console.log("El nuevo estado es ", newState);
      
      return newState;
    }
    case types.CHISMES_FETCH_SUCCESS: {
      const newState = {}
      action.payload.forEach(element => {
        const { id } = element;
        newState[id] = {...element, confirmed: true};
      });
      return newState
    }
    case types.CHISME_DELETED_SUCCESS: {
      const newState = state;
      delete newState[action.payload];
      return newState;
    }
    default: return state;
  }
}

const order = (state = [], action) => {
  switch (action.type) {
    case types.CHISME_ADDED_SUCCESS: {
      const { oldID, id } = action.payload;
      const newState = [...state];
      newState[state.indexOf(oldID)] = id;
      return newState;
    }
    case types.CHISME_ADDED_REQUESTED: {
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
      return newState
    }
    case types.CHISME_DELETED_SUCCESS: {
      const id = action.payload;
      const index = state.indexOf(id)
      const new_state = [
        ...state.slice(0, index),
        ...state.slice(index+1, state.length)
      ];
      console.log(new_state)
      return new_state;
    }
    default: return state;
  }
}

const page = (state = {}, action) => {
  switch (action.type) {
    case types.CHISME_REQUESTED: {
      const newState = {...state}
      newState['loading'] = true;
      return newState
    }
    case types.CHISME_REQUESTED_SUCCESS: {
      const newState = {...state}
      newState['loading'] = false;
      newState['chisme'] = action.payload;
      console.log(newState);
      
      return newState
    }
    default: return state;
  }
}

const chismeReducer = combineReducers({
  byId,
  order,
  page
})

export default chismeReducer


export const getChisme = (state, id) => state.byId[id];
export const getChismes = (state) => state.order.map(
  id => getChisme(state, id),
);