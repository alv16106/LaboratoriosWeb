import React, { Fragment } from 'react';
import PostFeed from '../PostFeed';
import PostForm from '../PostForm'

const RedditApp = () => (
  <Fragment>
    <PostForm></PostForm>
    <PostFeed></PostFeed>
  </Fragment>
);

export default RedditApp;