const UserModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const ObjectID = require("mongoose").Types.ObjectId;
const userModel = require("../models/user.model");
const postModel = require("../models/post.model");
const { signUpErrors, signInErrors } = require("../utils/errors.utils");
const salt = 10;
const maxAge = 3 * 24 * 60 * 60 * 1000;

const createToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_SECRET, {
    expiresIn: maxAge,
  });
};

module.exports.userSignup = async (req, res) => {
  if (!req.body.name) {
    res.status(400).json({ message: "Veuillez entrer un nom !" });
  }
  const hash = await bcrypt.hash(req.body.password, salt);
  try {
    const user = await UserModel.create({
      name: req.body.name,
      email: req.body.email,
      password: hash,
    });
    res.status(200).json({ message: "Utilisateur crée", user: user });
  } catch (err) {
    const errors = signUpErrors(err);
    res.status(400).send({ errors });
  }
};

module.exports.userSignin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.login(email, password);
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge });
    res.status(200).json({ user: user._id });
  } catch (err) {
    const errors = signInErrors(err);
    res.status(200).json({ errors });
  }
};

module.exports.userInfo = (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  userModel
    .findById(req.params.id)
    .select("-password")
    .then((docs) => {
      res.send(docs);
    })
    .catch((err) => {
      console.log("Id unknown : " + err);
      res.status(500).send("Error occured");
    });
};

module.exports.userLogout = (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });
  res.status(200).json({ message: "Déconnexion réussie" });
};

module.exports.userLikes = async (req, res) => {
  try {
    await UserModel.findByIdAndUpdate(
      req.params.id,
      { $addToSet: { likes: req.body.likes } },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    ).then(
      res.status(200).json({ message: "L'article a été ajouté aux favoris" })
    );
  } catch (err) {
    console.log(err);
  }
};

module.exports.removeUserLikes = async (req, res) => {
  try {
    await UserModel.findByIdAndUpdate(
      req.params.id,
      { $pull: { likes: req.body.likes } },
      { new: true, setDefaultsOnInsert: true }
    );
    res.status(201).json({ message: "Utilisateur mis à jour !" });
  } catch (err) {
    res.status(400).json({ message: err });
  }
};
