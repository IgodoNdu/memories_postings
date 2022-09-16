//create the routes for the posts (the memories posts)
//first import Express
import express from "express";
//import the controller(Logic) for the posts router
import { getPosts, createPost, updatePost, deletePost } from "../controllers/posts.js";

//Set up our router
const router = express.Router();

//Now we start adding the routes (with it's logic controller): Routes and controllers separated for cleaner code base
router.get('/', getPosts);
router.post('/', createPost);
//routing updates (patch i.e updating existing existing documents)
router.patch('/:id', updatePost);
//routing for deleting a post
router.delete('/:id', deletePost);

//eXPORT THE WHOLE ROUTER
export default router;