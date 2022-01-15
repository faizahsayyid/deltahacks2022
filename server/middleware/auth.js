/**
 * Authentication middleware to check if the user has  authorization to access an endpoint
 */
const jwt = require("jsonwebtoken");

// middleware to validate token
const verifyToken = (req, res, next) => {
  //1 - Read the token from header when login
  const token = req.header("auth-token");

  //2 - Throw error if user haven't pass the token
  if (!token) {
    return res.status(401).json({ error: "Access denied" });
  }

  //3 - Verify the token for the user
  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    //If token match then call or open  page
    next();
  } catch (err) {
    res.status(400).json({ error: "Token is not valid" });
  }
};

module.exports = verifyToken;
