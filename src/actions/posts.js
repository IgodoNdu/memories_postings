//import every from the api
import * as api from '../api';

//now creating action with action creators, i.e functions that'll return actions 
//(this could take time: async - hence need to use redux-thunk which will give us access to dispatch)
export const getPosts = () => async (dispatch) => {
    try {
        //Try to fetch all the data from the api
        const { data } = await api.fetchPosts();
        //then dispatch an action with the data from the backend
        dispatch({ type: 'FETCH_ALL_POST', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

//the create post action with the post (data)
export const createPost = (post) => async (dispatch) => {
    try {
        //get the data from the response: (a post api request to our backend server)
        const { data } = await api.createPost(post);
        //dispatch an action with the data
        dispatch({ type: 'CREATE_POST', payload: data });
    } catch (error) {
        console.log(error);
    }
}

// create the update post action creator with the post's id and the post (updated post data)
export const updatePost = (id, post) => async (dispatch) => {
    try {
        //make api request to update the post, destructure the response to immediately get the data
        const { data } = await api.updatePost(id, post); //this will return the updated memory of the post
        //dispatch the appropriate action with the appropriate data
        dispatch({ type: 'UPDATE_POST', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}