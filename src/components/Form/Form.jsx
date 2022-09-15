import React from 'react'
//import material-ui components to be used
import { TextField, Button, Typography, Paper } from '@material-ui/core';
//creating the {postData} object of the state, where the data from the post(form) will be stored, with the key (creator)
import { useState } from 'react';

//import styles
import useStyles from './formStyles';
//converting image file to text
import FileBase from 'react-file-base64';
//dispatching the create post action
import { useDispatch } from 'react-redux';
//import the action to be dispatched from the actions file 
import { createPost, updatePost } from '../../actions/posts';
//fetching the data of the post to be updated (so as to populate the update form fields with it)
import { useSelector } from 'react-redux';
import { useEffect } from 'react'; //used to populate values of the update form

//Updating a post: Get the ID of the specific/current post of interest (All the way from App.js, could use redux for an efficient handling of this scenario)
const Form = ({ currentId, setCurrentId }) => {
  const classes = useStyles();
  //setting the postData object of the state
  const [postData, setPostData] = useState({
    //specify properties the postData object will start with (will all start with an empty string)
    creator: '', title: '', message: '', tags: '', selectedFile: ''
  });

  //for updating a post: fetch the data of the post to be updated, and populate the form fields with it
  //tenary: if we have a currentId, loop over state.posts, find() the post (as 'p') with same ID as the 'currentId'. If not the case (i.e no currentId, return null)
  const post = useSelector((state) => currentId ? state.posts.find((p) => p._id == currentId) : null);

  //dispatching the create action
  const dispatch = useDispatch();

  //using useEffect to update the fields of the update form with the post's details. Takes two params (the call back function, and the dependency array)
  //the dependency array (i.e when the call back function should run (when what changes?)): in this case, when the post value changes from nothing to the actual post
  useEffect(() => {
    //if post exist, then set postData to the post(i.e post to be edited data).
    if(post) setPostData(post);
  }, [post])

  //handling submission (Where we'll dispatch the action). We'll send a post request with the data ffrom the user
  const handleSubmit = (e) => {
    //prevent the default refresh action
    e.preventDefault();
    //if we're editing/updating a post then the current post's id id passed, i.e there's a currentId prop, hence we dispatch a postUpdate Action instead (with the currentId, & postData as params)
    if(currentId) {
      dispatch(updatePost(currentId, postData))
    } else {
        //dispatch the createPost action with all the data from the form:our state:postData
        dispatch(createPost(postData));
    }
    //call clear form after we edit post or create a new post
    clear();
    
  }

  //handle form clear/reset
  const clear = () => {
    setCurrentId(null);
    setPostData({creator: '', title: '', message: '', tags: '', selectedFile: '' });
  }

  return (
    //creating our form with material-ui
    <Paper className={classes.paper}>
      <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        {/** Flip heading title with respect to when creating a new post or updating one */}
      <Typography variant='h6'>{currentId ? 'Editing' : 'Creating' } a Memory</Typography>
      {/**Who's creting the post. We change the value of this specific state field using the onChange */}
      <TextField name='creator' variant='outlined' label='Creator' fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
      <TextField name='title' variant='outlined' label='title' fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
      <TextField name='message' variant='outlined' label='message' fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
      <TextField name='tags' variant='outlined' label='tags' fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value })} />
      {/**Converting image file to text with File-base64 */}
      <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({base64}) => setPostData({ ...postData, selectedFile: base64 })}/></div>
      <Button className={classes.buttonSubmit} variant="contained" color='primary' size='large' type='submit' fullWidth>Submit</Button>
      <Button variant="contained" color='secondary' size='small' onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  )
}

export default Form;
