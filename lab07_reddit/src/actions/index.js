import * as types from '../types';

export const addPost = (
  id,
  title,
  body,
  karma,
) => ({
  type: types.POST_ADDED,
  payload: {
    id,
    title,
    body,
    karma,
  }
});

export const castVote = (
  postID,
  value,
) => ({
  type: types.VOTE_SUBMITED,
  payload: {
    postID,
    value,
  }
});

export const commentPost = (
  id,
  postID,
  text,
) => ({
  type: types.COMMENT_ADDED,
  payload: {
    id,
    postID,
    text,
  }
});
