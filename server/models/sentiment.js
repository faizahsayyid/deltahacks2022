const mongoose = require("mongoose");

// Schema defined through mongoose docs

const sentimentAnalysisScehma = new mongoose.Schema({
  text: String,
  start: Number,
  end: Number,
  sentiment: String,
  confidence: Number,
});
const sentimentSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 6,
    max: 16,
  },
  sentimentAnalysisResults: [sentimentAnalysisScehma],
  questionId: Number,
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("SentimentAnalysis", sentimentSchema);
