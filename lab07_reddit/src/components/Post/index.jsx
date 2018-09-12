import React from 'react';
import { connect } from 'react-redux';
import * as selectors from '../../reducers';

import * as actions from '../../actions';

const Post = ({
  title,
  body,
  karma,
  onClickPlus,
  onClickMinus,
}) => (
  <div>
    <h2>{title}</h2>
    <p>{body}</p>
    <div>
      karma
      ({karma}): &nbsp;
      <button onClick={onClickPlus}>+</button> &nbsp;
      <button onClick={onClickMinus}>-</button>
    </div>
  </div>
);

export default connect(
  (state, { id }) => ({
    ...selectors.getPost(state, id),
  }),
  (dispatch, { id }) => ({
    onClickPlus() {
      dispatch(actions.castVote(id, 1));
    },
    onClickMinus() {
      dispatch(actions.castVote(id, -1));
    }
  }),
)(Post);