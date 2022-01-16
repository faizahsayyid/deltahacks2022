const mongoose = require("mongoose");

const audioSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 6,
    max: 16,
  },
  filename: String,
  size: Number,
  mimetype: String,
  originalname: String,
  url: String,
  date: {
    type: Date,
    default: Date.now,
  },
  questionId: Number,
});

module.exports = mongoose.model("Audio", audioSchema);
