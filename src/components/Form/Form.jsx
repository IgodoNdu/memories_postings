import React from 'react'
//import material-ui components to be used
import { TextField, Button, Typography, Paper } from '@material-ui/core';
//creating the {postData} object of the state, where the data from the post(form) will be stored, with the key (creator)
import { useState } from 'react';

//import styles
import useStyles from './formStyles';
//converting image file to text
import FileBase from 'react-file-base64';


const Form = () => {
  const classes = useStyles();
  //setting the postData object of the state
  const [postData, setPostData] = useState({
    //specify properties the postData object will start with (will all start with an empty string)
    creator: '', title: '', message: '', tags: '', selectedFile: ''
  });

  //handling submission
  const handleSubmit = () => {

  }

  //handle form clear/reset
  const clear = () => {

  }

  return (
    //creating our form with material-ui
    <Paper className={classes.paper}>
      <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
      <Typography variant='h6'>Creating a Memory</Typography>
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
