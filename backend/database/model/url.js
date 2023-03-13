const mongoose = require("mongoose");

const Url = new mongoose.Schema({
  original_url: {
    type: String,
    required: true,
    minlength: [6, "username length must be at least 6 characters"],
  },
  short_url: {
    type: String,
    required: true,
    minlength: [6, "username length must be at least 6 characters"],
  },

  createdAt: { type: Date, default: Date.now() },
});

const UserModel = mongoose.model("url", Url);

module.exports = UserModel;
