const express = require("express");
const Post = require("../models/pie");
const { model } = require("mongoose");

const router1 = express.Router();

router1.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
    res.send("We are on post");
  }
});

module.exports = router1;
