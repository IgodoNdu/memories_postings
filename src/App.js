//Import material-ui components
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
//import thr image(s)
import memories from './images/memories.png';
//import the needed components
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
//import styles
import useStyles from './styles';
//Time to dispatch an action to the reducer(s)
import { useDispatch } from "react-redux";
import { useEffect } from "react";
//for creating the action to be dispatched via dispatch()
import { getPosts } from './actions/posts'
//editing a post: keeping track of the current post's id that's to be edited.
//Here's a good place as APP is a parent component that'll share the id of post (to edited) to both the Form & Posts Components as it's needed in these components for some actions/logic (This is props drilling. Use REDUX instead of this approach)
import { useState } from "react";

function App() {
  const classes = useStyles();
  //define our dispatch
  const dispatch = useDispatch();
  //a way to dispatch the action (useEffect)
  useEffect(() => {
    dispatch(getPosts());
  }, []);

  //Keeping track of the current post's id (for post edit purpose)
  const [currentId, setCurrentId] = useState(null); //set the id to null at the start (i.e if there's no post/id selected)

  return (
    //using material-ui
    <Container maxwidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
        <img className={classes.image} src={memories} alt="memories" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              {/** Also pass the setter method for the current id too (for individual post edit/update purpose) */}
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={7}>
              {/**Pass the current post's id to the form (for edit/update purpose). Also pass the setter method for the current id too */}
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
    
  );
}

export default App;
