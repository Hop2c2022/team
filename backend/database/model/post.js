const mongoose = require("mongoose");
const User = require("./users");

const PostSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Object,
    ref: User,
  },
  post: {
    type: String,
    required: true,
    minlength: [5, "username length must be at least 6 characters"],
    maxlength: [15, "username length must be 6 to 20 characters"],
  },
  createdAt: { type: Date, default: Date.now() },
});

const UserModel = mongoose.model("Post", PostSchema);

module.exports = PostModel;
