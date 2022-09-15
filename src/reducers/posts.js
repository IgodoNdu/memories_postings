//posts reducer: a function that takes the state, and with respect to the accompanying action, performs some logic
export default (posts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL_POST':
            return posts; //for now
        case 'CREATE_POST':
            return posts; //for now
        default:
            return posts;
    }
}