const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  label: {
    type: Array,
    // unique: true,
    // required: true,
  },
  data1: {
    type: Array,
    // required: true,
  },
  data2: {
    type: Array,
    // required: true,
  },
});

module.exports = mongoose.model("Posts", PostSchema);
