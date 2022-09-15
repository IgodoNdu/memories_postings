import React from 'react';
//styling with material-ui
import { Grid, CircularProgress } from '@material-ui/core';
//We'll be using the post component to build posts
import Post from './Post/Post';
//import styles
import useStyles from './postStyles';
//for fetching the data from the global redux store
import { useSelector } from 'react-redux';

//Receiving the current post id as prop (for post update purpose). Inefficient approach, use redux instead
const Posts = ({ setCurrentId }) => {
  //for styling
  const classes = useStyles();
  
  //initializing useSelector as a hook with access to the global redux store/state, then return what you need i.e(state.property)
  const posts = useSelector((state) => state.posts);
  console.log(posts); // for now

  return (
    //IF NO POSTS
    !posts.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems='stretch' spacing={3}>
        {/**Loop over the posts */}
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6}>
            {/**passing the setCurrentId prop to post component (for post update purpose). Use redux instead of this props drilling approach */}
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  )
}

export default Posts;
