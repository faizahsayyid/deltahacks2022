/**
 *
 * User Controller
 */
const axios = require("axios");

// Import User model here
const { AssemblyAI } = require("../models");
//Export all user model functions

// Create and Save a new User

exports.getSentiment = async (req, res) => {
  console.log(req);
  // Get user file url
  await axios({
    method: "post",
    url: "https://api.assemblyai.com/v2/transcript",
    data: {
      audio_url: req.body.audio_url,
      sentiment_analysis: true,
    },
    headers: {
      Authorization: process.env.ASSEMBLYAI_API_KEY,
      "Content-Type": "application/json",
    },
  })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log("An error has occurred", err);
    });
};
