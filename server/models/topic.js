const mongoose = require("mongoose");

// Schema defined through mongoose docs

const topicAnalysisSchema = new mongoose.Schema({
  results: [],
  summary: Map,
});

const topicSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  topicAnalysisResults: [topicAnalysisSchema],

  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("TopicAnalysis", topicSchema);
