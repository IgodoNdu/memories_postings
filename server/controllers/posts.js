//Here we create the handlers for our routes for cleaner/efficient code. Extract the logic of the routes, and bring in here
//Import the Model (access to the db model) required to do this (getPosts, createPosts)
import mongoose from 'mongoose';
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
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }

}

//function for post edit/update
export const updatePost = async (req, res) => {
    //get the id from the request, and rename the id to _id (a mongoose object id) via object destructuring
    const { id: _id } = req.params;
    const post = req.body;
    //check if _id is a mongoose object id
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');
    //update the post if the _id is valid (from the model:PostMessage). Specify new=true, so we can receive the updated version of that post
    //the new updated post object should spread the new data received, plus the Id (every post needs its id). Hence spread then add: i.e {...post, _id}
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, { ...post, _id }, { new: true });
    //send the updated post
    res.json(updatedPost);
}

//deleting a post
export const deletePost = async (req, res) => {
    //get the id of post to delete
    const { id } = req.params;
    //Ensure the ID is valid
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');
    //delete the post with the matching ID
    await PostMessage.findByIdAndRemove(id);
    //send notification on completion
    res.json({ message: 'Post deleted successfully' });
}

//controller logic for liking a post
export const likePost = async (req, res) => {
    //get the id of the post to be liked
    const { id } = req.params;
    //check if the ID is valid
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');
    //find the post to be liked
    const post = await PostMessage.findById(id);
    //now the updated post (i.e post with it's incremented like count) Remember with update request, specify the 3rd param i.e {new: true}
    const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount++}, { new: true });
    //return/send notification
    res.json(updatedPost);

}