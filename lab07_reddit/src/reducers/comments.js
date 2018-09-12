import { combineReducers } from 'redux';
import * as types from '../types';


const byId = (state = {}, action) => {
  switch (action.type) {
    case types.COMMENT_ADDED: {
      const { id } = action.payload;
      return {
        ...state,
        [id]: action.payload,
      };
    }
    default: return state;
  }
}

const order = (state = [], action) => {
  switch (action.type) {
    case types.COMMENT_ADDED: {
      const { id } = action.payload;
      return [
        ...state,
        id,
      ];
    }
    default: return state;
  }
}

const comments = combineReducers({
  byId,
  order,
});

export default comments;

export const getComment = (state, id) => state.byId[id];
export const getComments = (state) => state.order.map(
  id => getComment(state, id),
);
export const getCommetsByParent = (state, pID) => getComments(state).filter(comment => comment.postID == pID);
