import React from 'react';
import { connect } from 'react-redux';
import * as selectors from '../../reducers';


const Comment = ({
  text,
}) => (
  <li>
    {text}
  </li>
);

export default connect(
  (state, { id }) => ({
    ...selectors.getComment(state, id),
  }),
  undefined,
)(Comment);
