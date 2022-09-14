//Here we create the handlers for our routes for cleaner/efficient code. Extract the logic of the routes, and bring in here

//declare a function for the posts logic, and export it for use in the required router
export const getPosts = (req, res) => {
    res.send('DOES THIS WORK!');
}