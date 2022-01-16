const express = require("express");

const { audio: controller } = require("../controllers/");
const multer = require("multer");

const allowedMimeTypes = ["audio/wav", "audio/mp3", "audio/mp4", "audio/mpeg"];
const uploadDest = "./static/audio";

const filter = function (req, file, cb) {
  if (!allowedMimeTypes.includes(file.mimetype.toLowerCase())) {
    cb(null, false);
  }
  cb(null, true);
};

var upload = multer({
  dest: uploadDest,
  fileFilter: filter,
});

// Can add a validator later

const router = express.Router();

router
  .route("/upload")
  .post(upload.single("audio_file"), controller.uploadAudio);
router.route("/get").get(controller.getAllAudioByUser);

router.route("/status").get(controller.status);

// protected route
//router.route('/profile').get(authenticated, controller.getProfile);

module.exports = router;
