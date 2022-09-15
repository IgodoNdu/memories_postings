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

//the create post action with the post
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