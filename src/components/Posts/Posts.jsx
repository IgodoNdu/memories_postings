import React from 'react';
//We'll be using the post component to build posts
import Post from './Post/Post';
//import styles
import useStyles from './postStyles';

const Posts = () => {
  const classes = useStyles();
  return (
    <div>
      <h1>Posts</h1>
      <Post />
    </div>
  )
}

export default Posts;
