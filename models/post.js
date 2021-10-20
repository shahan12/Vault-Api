const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  SafeName: {
    type: String,
    unique: true,
    // required: true,
  },
  Owner: {
    type: String,
    // required: true,
  },
  Description: {
    type: String,
    // required: true,
  },
  Type: {
    type: String,
    // required: true,
  },
  secrets: {
    type: Array,
  },
});

module.exports = mongoose.model("Posts", PostSchema);
