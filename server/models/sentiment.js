const mongoose = require("mongoose");

// Schema defined through mongoose docs

const sentimentSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  sentimentAnalysisResults: [String],

  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("AssemblyAI", assemblyAISchema);
