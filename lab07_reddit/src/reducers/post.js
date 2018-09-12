import { combineReducers } from 'redux';
import * as types from '../types';

const byID = (state = {}, action) => {
  switch(action.type){
    case types.POST_ADDED: {
      const { id } = action.payload;
      return {
        ...state,
        [id]: action.payload,
      };
    }
    case types.VOTE_SUBMITED: {
      const { postID, value } = action.payload;
      const post = state[postID];
      const { karma } = post;
        return {
          ...state,
          [postID]: {
            ...post,
            karma: karma + value,
          }
        };
    }
    default: return state;
  }
};

const order = (state = [], action) => {
  switch (action.type) {
    case types.POST_ADDED: {
      const { id } = action.payload;
      return [
        ...state,
        id,
      ];
    }
    default: return state;
  }
};

const posts = combineReducers({
  byID,
  order,
});

export default posts;

export const getPost = (state, id) => state.byID[id];
export const getPosts = (state) => state.order.map(
  id => getPost(state, id),
);
