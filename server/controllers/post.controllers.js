const PostModel = require("../models/post.model");

module.exports.getPosts = async (req, res) => {
  const posts = await PostModel.find();
  res.status(200).json(posts);
};

module.exports.setPosts = async (req, res) => {
  if (!req.body.name) {
    res.status(400).json({ message: "Merci d'ajouter un nom" });
  }

  const post = await PostModel.create({
    name: req.body.name,
    image: req.body.image,
    description: req.body.description,
    price: req.body.price,
  });

  res.status(200).json(post);
};

module.exports.editPost = async (req, res) => {
  try {
    const post = await PostModel.findById(req.params.id);
    if (!post) {
      res.status(400).json({ message: "Cette article n'existe pas !" });
    }
    const updatePost = await PostModel.findByIdAndUpdate(post, req.body, {
      new: true,
    });
    res.status(200).json(updatePost);
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports.deletePost = async (req, res) => {
  const post = await PostModel.findById(req.params.id);
  if (!post) {
    res.status(400).json({ message: "L'article n'existe pas !" });
  }
  await post.deleteOne(post);
  res.status(200).json({ message: "L'article a été supprimé " });
};
