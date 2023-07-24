const express = require("express");
const app = express();
const port = 5000;
const postRoutes = require("./routes/post.routes");
const userRoutes = require("./routes/user.routes");
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv").config();
const { checkUser, requireAuth } = require("./middlewares/auth.middleware");
const cors = require("cors");
const bodyParser = require("body-parser");

connectDB();

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());

// jwt
app.get("*", checkUser);
app.get("/jwtid", requireAuth, (req, res) => {
  res.status(200).send(res.locals.user._id);
});

// Routes
app.use("/post", postRoutes);
app.use("/auth", userRoutes);

// Server listener

app.listen(port, () => {
  console.log("Le serveur est lancé sur le port : " + port);
});
