//Here we'll combine all the possible reducers we'll be needing for this project. This makes for cleaner code base
import { combineReducers } from "redux";
import posts from './posts';

export default combineReducers({
    // in here we'll use all the individual reducers we have as the case may be
    posts, //short for posts:posts (when key & value are same)
});