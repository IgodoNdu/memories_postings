//He we create the model for the posts
//import mongoose
import mongoose from "mongoose";

//create a mongoose schema
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    //we'll convert the image into a string
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
})

//Now turn the above schema into a model and export
const PostMessage = mongoose.model('PostMessage', postSchema);
export default PostMessage; //exporting a mongoose model from the postMessage file