const express = require("express");

const { user: controller } = require("../controllers/");
const auth = require("../middleware/auth");
// Can add a validator later

const router = express.Router();

// unprotected route
router.route("/register").post(controller.register);
router.route("/login").post(controller.login);
router.route("/status").get(controller.status);
// protected route
//router.route('/profile').get(authenticated, controller.getProfile);

module.exports = router;
