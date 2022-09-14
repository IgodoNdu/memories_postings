//Import material-ui components
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
//import thr image(s)
import memories from './images/memories.png';
//import the needed components
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";


function App() {
  return (
    //using material-ui
    <Container maxwidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">Memories</Typography>
        <img src={memories} alt="memories" height="60" />
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
