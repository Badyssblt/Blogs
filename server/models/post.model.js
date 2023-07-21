const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    likers: {
      type: [String],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("post", postSchema);
