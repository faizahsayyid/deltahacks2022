const mongoose = require("mongoose");

// Schema defined through mongoose docs

const questionSchema = new mongoose.Schema({
  role: String,
  start: Number,
  end: Number,
  title: String,
  description: String,
  });