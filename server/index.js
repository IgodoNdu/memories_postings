import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';
//Import the posts router already created
import postRoutes from './routes/posts.js';

//as it's traditional practice with express, initialize the app
const app = express();

//setting up bodyParser to send our requests(post) as needed
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
//for cross origin request. This should be described above the routes middleware to avoid errors due to cors
app.use(cors());

//use express middleware to connect the routes to our application
//In the first param:set the starting path(prefix) for all the routes inside posts.js, 2nd param: set the route
app.use('/posts', postRoutes)


//database: https://www.mongodb.com/cloud/atlas (Creating Models for our posts)
const CONNECTION_URL = 'mongodb+srv://learning:learning01@cluster0.4k9ccvn.mongodb.net/?retryWrites=true&w=majority';
//use provisioned port or default to 5000
const PORT = process.env.PORT || 5000;

//Using mongoose to connect to our database with two parameters (returns a promise)
//if connection is true, call the app with listen and it's params(port no, and call back func to run once the app listens successfully)
//if connection isn't successful, return the error message
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`server running on port: ${PORT}`)) )
    .catch((error) => console.log(error.message));

//to avoid console warnings
//mongoose.set('useFindAndModify', false);
