/**
 *
 * User Controller
 */

// Import User model here
const { Audio } = require("../models");

exports.getAllAudioByUser = async (req, res) => {
  const username = req.body.username;
  try {
    if (username) {
      const audioFiles = await Audio.find({ username });

      res.status(200).json({
        error: null,
        files: audioFiles,
      });
    } else {
      res.status(400).json({ error: "Username must be defined" });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
};
exports.uploadAudio = async (req, res) => {
  const audioFile = new Audio({ username: req.body.username, ...req.file });

  try {
    const savedAudioFile = await audioFile.save();
    res.json({
      error: null,
      data: {
        audioId: savedAudioFile._id,
        name: savedAudioFile.filename,
        url:
          req.protocol +
          "://" +
          req.get("host") +
          `/audio/${savedAudioFile.filename}`,
      },
    });
  } catch (error) {
    res.status(400).json({ error });
  }
};

exports.status = (req, res) => {
  res.json({
    message: "OK",
    timestamp: new Date().toISOString(),
    IP: req.ip,
    URL: req.originalUrl,
  });
};
