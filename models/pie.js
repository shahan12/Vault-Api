const mongoose = require("mongoose");

const PieSchema = mongoose.Schema({
  value: {
    type: Array,
    // unique: true,
    // required: true,
  },
  legend: {
    type: Array,
    // required: true,
  },
});

module.exports = mongoose.model("Pie", PieSchema);
