import { combineReducers } from 'redux';

import posts, * as fromPosts from './post';
import comments, * as fromComments from './comments';

const reducer = combineReducers({
  posts,
  comments,
});

export default reducer;

export const getPost = (state, id) => fromPosts.getPost(state.posts, id);
export const getPosts = (state) => fromPosts.getPosts(state.posts);

export const getComment = (state, id) => fromComments.getComment(state.comments, id);
export const getComments = (state) => fromComments.getComments(state.comments);
export const getCommetsByParent = (state, pID) => fromComments.getCommetsByParent(state.comments, pID);
