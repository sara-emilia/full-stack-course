// Mongoose module
const mongoose = require("mongoose");

// Make schema to your data model
const Model = new mongoose.Schema({
  event_name: {
    required: "Please enter the name of the event",
    type: String,
  },
  startdate: {
    required: "Please enter the start date",
    type: String,
  },
  enddate: {
    required: false,
    type: String,
  },
  season: {
    required: false,
    type: String,
  },
});

module.exports = mongoose.model("Data", Model);
