const mongoose = require("mongoose");

// Schema defined through mongoose docs

const topicSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  topicAnalysisResults: [String],



  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("TopicAnalysis", topicSchema);