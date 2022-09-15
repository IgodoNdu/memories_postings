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
import getPosts from './actions/posts'


function App() {
  const classes = useStyles();
  //define our dispatch
  const dispatch = useDispatch();
  //a way to dispatch the action (useEffect)
  useEffect(() => {
    dispatch(getPosts());
  }, []);

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
              <Posts />
            </Grid>
            <Grid item xs={12} sm={7}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
    
  );
}

export default App;
