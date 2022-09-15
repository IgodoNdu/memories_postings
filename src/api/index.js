//here we make api calls to our backend
import axios from "axios";

//specify the url: for this project-case, url pointing to our backend route
const url = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get(url);
//api call for creating a post
export const createPost = (newPost) => axios.post(url, newPost);
