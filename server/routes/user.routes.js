const express = require("express");
const {
  userSignup,
  userSignin,
  userLogout,
  userInfo,
  userLikes,
  removeUserLikes,
} = require("../controllers/user.controllers");
const router = express.Router();

router.use("/signup", userSignup);

router.use("/login", userSignin);
router.get("/logout", userLogout);
router.patch("/likes/:id", userLikes);
router.patch("/dislikes/:id", removeUserLikes);

router.use("/:id", userInfo);

module.exports = router;
