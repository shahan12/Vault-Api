const express = require("express");
const Post = require("../models/post");
const { model } = require("mongoose");

const router = express.Router();
// gets all the post
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
    res.send("We are on post");
  }
});
//submit a post
router.post("/", async (req, res) => {
  const post = new Post({
    SafeName: req.body.SafeName,
    Owner: req.body.Owner,
    Description: req.body.Description,
    Type: req.body.Type,

    //secrets: req.body.secrets,
  });

  try {
    const savedPost = await post.save();
    console.log(savedPost);
    res.json(savedPost);
  } catch (err) {
    console.log({ message: err });
    res.json({ message: err });
  }
});

//toget a specific post

router.get("/:postId", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

//delete a specific post
router.delete("/:postId", async (req, res) => {
  try {
    const removedPost = await Post.remove({ _id: req.params.postId });
    res.json(removedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

//update a post

router.patch("/:postId", async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.postId },
      {
        $set: {
          Owner: req.body.Owner,
          SafeName: req.body.SafeName,
          Description: req.body.Description,
          Type: req.body.Type,
        },
      }
    );
    console.log(updated);
    res.json(updatedPost);
  } catch (err) {
    res.json({ message: err });
  }
  console.log("called after patch");
});
router.put("/secret/:postId", async (req, res) => {
  try {
    console.log(req.body);
    const updatedSafe = await Post.updateOne(
      { _id: req.params.postId },
      { $push: { secrets: [req.body.secret] } }
    );
    console.log("called after secret ", updatedSafe);
    res.json(updatedSafe);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
