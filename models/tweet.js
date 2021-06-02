const mongoose = require("mongoose");

const TweetSchema = new mongoose.Schema({
  avatar: {
    type: String,
    trim: true,
    default: "https://source.unsplash.com/random/50x50",
  },
  userName: {
    type: String,
    required: true,
    trim: true,
  },
  tagName: {
    type: String,
    required: true,
    trim: true,
  },
  tweet: {
    type: String,
    required: true,
    trim: true,
  },
});

const Tweet = mongoose.model("Tweet", TweetSchema);

module.exports = Tweet;
