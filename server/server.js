const express = require("express");
const mongoose = require("mongoose");

const routes = require("./routes/");

var cors = require("cors");

//Store sensitive information to env variables
const dotenv = require("dotenv");
dotenv.config();
const verifyToken = require("./utils/verifyToken");

//mongoDB Atlas Connection String
const url = process.env.MONGODB_URL;

//Connect to mongoDB Atlas
const connect = mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.dcuv4.mongodb.net/${process.env.DB_NAME}${process.env.DB_FLAGS}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
connect.then(
  (db) => {
    console.log("Connected correctly to server!");
  },
  (err) => {
    console.log("Could not connect to the database. Exiting now...", err);
    //process.exit();
  }
);

//Define Express Server (Could move this to it's own file such as app.js)
const app = express();
// parse requests of content-type - application/json; app.use(express.json());
app.use(express.json());
app.use(cors());
app.use(express.static("./static"));

// parse requests of content-type - application/x-www-form-urlencoded; app.use(express.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
// Other middleware can go here or add routes here
app.use("/api", routes);

// define a simple route
app.get("/", (req, res) => {
  res.json({
    message: "Hello from DeltaHack2022 Backend!",
  });
});
app.listen({ port: process.env.PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:${process.env.PORT}`)
);
