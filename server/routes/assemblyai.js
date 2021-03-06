const express = require("express");

const { assemblyai: controller } = require("../controllers/");
const auth = require("../middleware/auth");

// Can add a validator later

const router = express.Router();

// unprotected route
router.route("/").post(controller.getSentimentData);
router.route("/get").get(controller.getAnalysesByUser);
router.route("/byAudioName").get(controller.getAnalysesByAudioName);
// protected route
//router.route('/profile').get(authenticated, controller.getProfile);

module.exports = router;
