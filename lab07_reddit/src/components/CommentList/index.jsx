import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import * as selectors from '../../reducers';
import Comment from '../Comment';


const InventoryList = ({ comments = [] }) => (
  <Fragment>
    <h3>{'Comentarios:'}</h3>
    <ul>
      {
        comments.length > 0
          ? comments.map(({ id }) => <Comment key={id} id={id}></Comment>)
          : <li>Sin comentarios</li>
      }
    </ul>
  </Fragment>
);

export default connect(
  (state, {id}) => ({
    comments: selectors.getCommetsByParent(state, id),
  }),
  undefined,
)(InventoryList);
