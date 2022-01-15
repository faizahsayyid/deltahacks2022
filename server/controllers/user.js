/**
 *
 * User Controller
 */

// Import User model here
const { User } = require("../models");
//Export all user model functions

// Create and Save a new User

exports.create = (req, res) => {
  // Validate request
  if (!req.body.content) {
    return res.status(400).send({
      name: "User info can not be empty",
    });
  }

  // Create a user (Password will be encrypted)
  const user = new User({
    name: req.body.title,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });

  // Save User in the database
  User.save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(req.body);
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User.",
      });
    });
};
