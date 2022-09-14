//Here we create the handlers for our routes for cleaner/efficient code. Extract the logic of the routes, and bring in here
//Import the Model (access to the db model) required to do this (getPosts, createPosts)
import PostMessage from '../models/postMessage.js'

//declare a function for the posts logic, and export it for use in the required router
export const getPosts = async (req, res) => {
    //res.send('DOES THIS WORK!');
    try {
        //retrieve all posts from the DB (takes time, hence asynchronous)
        const postMessages = await PostMessage.find();
        console.log(postMessages);//checks purpose only
        //if all works fine
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

//function for the post creation route logic
export const createPost = async (req, res) => {
    //for a post request, get the submitted/posted data
    const post = req.body;
    //create a new post with received inflow
    const newPost = new PostMessage(post);

    try {
        // save to DB
        await newPost.save();
        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({ message: error.message });
    }

}