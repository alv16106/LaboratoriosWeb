import React from 'react';
import { connect } from 'react-redux';

import Post from '../Post';
import CommentForm from '../CommentForm';
import CommentList from '../CommentList';

const PostElement = ({id = 0}) =>(
  <div className = "post">
    <Post id={id}/>
    <CommentForm id={id}/>
    <CommentList id={id}/>
  </div>
)

export default connect(
  (state, {id}) => ({
    id: id,
  }),
  undefined,
)(PostElement);