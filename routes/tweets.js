const Joi = require("joi");
const express = require("express");
const router = express.Router();
const TweetModel = require("../models/tweet");

router.get("/", async (_, res) => {
  const tweets = await TweetModel.find({});
  try {
    res.send(tweets);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/", async (req, res) => {
  const schema = Joi.object({
    userName: Joi.string().required(),
    tagName: Joi.string().required(),
    tweet: Joi.string().min(1).max(50).required(),
  });

  const result = schema.validate(req.body);

  if (result.error) {
    res.status(400).send(result.error.details[0].message);
    return;
  }

  const tweet = new TweetModel(req.body);

  try {
    await tweet.save();
    res.send(tweet);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
