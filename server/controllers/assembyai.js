/**
 *
 * User Controller
 */
const axios = require("axios");

const timeout = require("../utils/timeout");
// Import User model here
const { SentimentAnalysis, TopicAnalysis, Audio } = require("../models");

//Export all user model functions
// Create and Save a new User
const queueSentiment = async (url) => {
  const id = axios({
    method: "post",
    url: "https://api.assemblyai.com/v2/transcript",
    data: {
      audio_url: url,
      sentiment_analysis: true,
      iab_categories: true,
    },
    headers: {
      Authorization: process.env.ASSEMBLYAI_API_KEY,
      "Content-Type": "application/json",
    },
  })
    .then((data) => {
      console.log(data);
      return data.data.id;
    })
    .catch((err) => console.log("error"));

  return id;
};
// This is isn't declared as `async` because it already returns a promise
function delay() {
  // `delay` returns a promise
  return new Promise(function (resolve, reject) {
    // Only `delay` is able to resolve or reject the promise
    setTimeout(function () {
      resolve(42); // After 3 seconds, resolve the promise with value 42
    }, 1000);
  });
}

getSentiment = async (id) => {
  //   console.log("id is" + id);

  // wait for 3 seconds (just for the sake of this example)

  const results = await axios({
    method: "get",
    url: `https://api.assemblyai.com/v2/transcript/${id}`,
    headers: {
      Authorization: process.env.ASSEMBLYAI_API_KEY,
      "Content-Type": "application/json",
    },
  }).then((data) => {
    const status = data.data.status;

    if (status == "processing" || status == "queued") {
      delay();

      return getSentiment(id);
    } else {
      console.log("Processing Done!");

      return {
        sentiment_analysis_results: data.data.sentiment_analysis_results,
        iab_categories_result: data.data.iab_categories_result,
      };
    }
  });
  return results;
};

exports.getSentimentData = async (req, res) => {
  await queueSentiment(req.body.audio_url)
    .then((id) => getSentiment(id))
    .then(async (data) => {
      console.log(data);
      const Sentiment = new SentimentAnalysis({
        username: req.body.username,
        sentimentAnalysisResults: data.sentiment_analysis_results,
        questionId: req.body.questionId,
      });
      const Topic = new TopicAnalysis({
        username: req.body.username,
        topicAnalysisResults: data.iab_categories_result,
        questionId: req.body.questionId,
      });
      try {
        const savedTopic = await Topic.save();
        const savedSentiment = await Sentiment.save();
        res.status(200).json({ savedTopic, savedSentiment });
      } catch (error) {
        res.status(400).json({ error });
      }
    });
};

exports.getAnalysesByUser = async (req, res) => {
  const username = req.query.username;
  try {
    if (username) {
      const topicResult = await TopicAnalysis.find({ username });
      const sentimentalResult = await SentimentAnalysis.find({ username });
      res.status(200).json({
        error: null,
        topicalResults: topicResult,
        sentimentalResults: sentimentalResult,
      });
    } else {
      res.status(400).json({ error: "Username must be defined" });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
};
