import React from 'react';
//We'll be using the post component to build posts
import Post from './Post/Post';
//import styles
import useStyles from './postStyles';
//for fetching the data from the global redux store
import { useSelector } from 'react-redux';

const Posts = () => {
  //for styling
  const classes = useStyles();
  
  //initializing useSelector as a hook with access to the global redux store/state, then return what you need i.e(state.property)
  const posts = useSelector((state) => state.posts);
  console.log(posts); // for now

  return (
    <div>
      <h1>Posts</h1>
      <Post />
    </div>
  )
}

export default Posts;
