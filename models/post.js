import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  userID: Number,
  id: Number,
  title: String,
  body: String,
});

const Posts = mongoose.model("Posts", postSchema);

export default Posts;
