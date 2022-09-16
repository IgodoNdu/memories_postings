//posts reducer: a function that takes the state, and with respect to the accompanying action, performs some logic
export default (posts = [], action) => {
    switch (action.type) {
        case 'DELETE_POST':
            //return all the posts. filtering out the one we deleted
            return posts.filter((post) => post._id !== action.payload);
        case 'UPDATE_POST':
            //if post._id == action,payload._id, return the updated post, else return the post as it was without any update
            return posts.map((post) => post._id === action.payload._id ? action.payload : post);
        case 'FETCH_ALL_POST':
            return action.payload; //for now
        case 'CREATE_POST':
            return [...posts, action.payload]; //spread already existing posts, then add the new post, then return them all
        default:
            return posts;
    }
}
