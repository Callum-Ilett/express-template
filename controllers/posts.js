import Posts from "../models/post.js";
import mongoose from "mongoose";

const checkValidObjectId = (id) => {
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ message: `No post with id: ${id}` });
};

const getAllPosts = async (req, res) => {
  try {
    const posts = await Posts.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getSinglePost = async (req, res) => {
  const { id } = req.params;

  checkValidObjectId(id);

  try {
    const post = await Posts.findById(id);
    res.status(200).json(post);
  } catch (error) {
    console.log(error.message);
    res.status(404).json({ message: error.message });
  }
};

export { getAllPosts, getSinglePost };
