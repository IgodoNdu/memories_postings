//here we make api calls to our backend
import axios from "axios";

//specify the url: for this project-case, url pointing to our backend route
const url = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get(url);
//api call for creating a post
export const createPost = (newPost) => axios.post(url, newPost);
//implement the api call for our update post route (passing the updated post, and post's ID as params)
export const updatePost = (id, updatePost) => axios.patch(`${url}/${id}`, updatePost);
//BackendAPI call for deleting a post
export const deletePost = (id) => axios.delete(`${url}/${id}`);
//API call for liking a post
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);

