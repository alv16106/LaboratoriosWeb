import React from 'react';
import { connect } from 'react-redux';

import * as selectors from '../../reducers';
import PostElement from '../PostElement';


const PostFeed = ({ posts = [] }) => (
  <div className={'feed'}>
    <h1>{'Posts:'}</h1>
      {
        posts.length > 0
          ? posts.map(({ id }) => <PostElement id={id} key={id}></PostElement>)
          : <p>No hay posts!</p>
      }
  </div>
);

export default connect(
  state => ({
    posts: selectors.getPosts(state),
  }),
  undefined,
)(PostFeed);
