//posts reducer: a function that takes the state, and with respect to the accompanying action, performs some logic
export default (posts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL_POST':
            return action.payload; //for now
        case 'CREATE_POST':
            return [...posts, action.payload]; //spread already existing posts, then add the new post, then return them all
        default:
            return posts;
    }
}