// Use express-module
const express = require("express");

// Mongoose module
const mongoose = require("mongoose");

/* Let's take env parameters in use */
require("dotenv").config();

// Create connection script to db
const uri = process.env.DATABASE_URL;

// Make connection to database
mongoose.connect(uri);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});
const app = express();

app.use(express.json());
const routes = require("./routes/routes");

app.use("/api", routes);

// Web server by express
var PORT = process.env.PORT || 8080;
app.listen(PORT, function() {
  console.log("Example app is listening on port %d", PORT);
});