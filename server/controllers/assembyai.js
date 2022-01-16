/**
 *
 * User Controller
 */
const axios = require("axios");

const timeout = require("../utils/timeout");
// Import User model here
const { SentimentAnalysis, TopicAnalysis } = require("../models");

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
      console.log("Processing Done!", data.data);
      return {
        sentiment_analysis_results: data.data.sentiment_analysis_results,
        iab_categories_result: data.data.iab_categories_result,
      };
    }
  });
  return results;
};

exports.getSentimentData = async (data) => {
  await queueSentiment(data.audio_url)
    .then((id) => getSentiment(id))
    .then((data) => {
      console.log(data);
      const sentiment = new SentimentAnalysis({
        username: data.username,
        sentimentAnalysisResults: data.sentiment_analysis_results,
      });
      const topic = new TopicAnalysis({
        username: data.username,
        topicAnalysisResults: data.iab_categories_result,
      });

      return JSON.stringify({ sentiment, topic });
    });
};

exports.uploadAudio = async (req, res) => {
  // console.log(req.file);
  res.send(req.file);
};
