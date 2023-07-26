const express = require("express");
const {
  setPosts,
  getPosts,
  editPost,
  deletePost,
  getOnePost,
} = require("../controllers/post.controllers");
const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getOnePost);

router.post("/", setPosts);

router.put("/:id", editPost);

router.delete("/:id", deletePost);

module.exports = router;
