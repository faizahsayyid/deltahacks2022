/**
 *
 * User Controller
 */

// Import User model here
const { User } = require("../models");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

//Validation
const { registerValidation, loginValidation } = require("../validations/user");

// Create and Save a new User
exports.register = async (req, res) => {
  //1.1 - Validate the user
  const { error } = registerValidation(req.body);

  //1.2 - Throw validation errors
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  //2.1 - Check is user email already exist
  const isEmailExist = await User.findOne({ email: req.body.email });

  //2.2 - Throw error when email already registered
  if (isEmailExist) {
    return res.status(400).json({ error: "Email already exists" });
  }

  //3 - Encrypt/Hash the password
  const salt = await bcrypt.genSalt(10);
  const password = await bcrypt.hash(req.body.password, salt);

  //4 - Create object for mongodb
  const user = new User({
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    password,
  });

  //5 - Save new user to mongodb and return unique ID
  try {
    const savedUser = await user.save();
    res.json({ error: null, data: { userId: savedUser._id } });
  } catch (error) {
    res.status(400).json({ error });
  }
};

exports.login = async (req, res) => {
  //1.1 - Validate the user
  const { error } = loginValidation(req.body);

  //1.2 - Throw validation errors
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  //3.1 - Find the user from Database
  const user = await User.findOne({ username: req.body.username });

  //3.2 - Throw error when username is wrong
  if (!user) {
    return res.status(400).json({ error: "Username is wrong" });
  }

  //3.3 - Check for password correctness
  const validPassword = await bcrypt.compare(req.body.password, user.password);

  //3.4 - Throw error when password is wrong
  if (!validPassword) {
    return res.status(400).json({ error: "Password is wrong" });
  }

  //4 - Create token
  const token = jwt.sign(
    //Payload data
    {
      username: user.username,
      id: user._id,
    },
    //Get your secret TOKEN
    process.env.TOKEN_SECRET
  );

  //5 - Return token to the user
  res.header("auth-token", token).json({
    error: null,
    data: {
      token,
    },
  });
};

exports.status = (req, res) => {
  res.json({
    message: "OK",
    timestamp: new Date().toISOString(),
    IP: req.ip,
    URL: req.originalUrl,
  });
};
