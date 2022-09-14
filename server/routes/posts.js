//create the routes for the posts (the memories posts)
//first import Express
import express from "express";

//Set up our router
const router = express.Router();

//Now we start addig the routes
router.get('/', (req, res) => {
    res.send('DOES THIS WORK!');
});

//eXPORT THE WHOLE ROUTER
export default router;