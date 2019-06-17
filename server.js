const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;
const app = express();

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});



// MONGODB

// Configure MongoDB
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/googlebooks";

// Connect to the Mongo DB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });



// Listener: Needs to be the last thing in the server.js file
app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});