import React from 'react';
import { connect } from 'react-redux';
import * as selectors from '../../reducers';

import * as actions from '../../actions';

const Chisme = ({
  title,
  body,
  onClick
}) => (
  <div>
    <h2>{title}</h2>
    <p>{body}</p>
    <div>
      <button onClick={onClick}>x</button> &nbsp;
    </div>
  </div>
);

export default connect(
  (state, { id }) => ({
    ...selectors.getChisme(state, id),
  }),
  (dispatch, { id }) => ({
    onClick() {
      dispatch(actions.removeChisme(id));
    }
  }),
)(Chisme);