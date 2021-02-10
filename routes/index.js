import express from "express";
import postsRoute from "./posts.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("API is working");
});

router.use("/posts", postsRoute);

export default router;
