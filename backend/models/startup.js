const mongoose = require("mongoose");

const startupSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add "],
  },
  gender: {
    type: String,
    required: [true, "Please add "],
  },
  linkedInUrl: {
    type: String,
    required: [true, "Please add "],
  },
  singleFounder: {
    type: String,
    required: [true, "Please add "],
  },
  email: {
    type: String,
    required: [true, "Please add "],
  },
  phoneNumber: {
    type: String,
    required: [true, "Please add "],
  },
  startupName: {
    type: String,
    required: [true, "Please add "],
  },
  webSiteUrl: {
    type: String,
    required: [true, "Please add "],
  },
  companyType: {
    type: String,
    required: [true, "Please add "],
  },
  registeredName: {
    type: String,
    required: [true, "Please add "],
  },
  sector: {
    type: String,
    required: [true, "Please add "],
  },
  monthAndYearOfIncorparation: {
    type: String,
    required: [true, "Please add "],
  },
  cityOfOperation: {
    type: String,
    required: [true, "Please add "],
  },
  discriptionAboutStartup: {
    type: String,
    required: [true, "Please add "],
  },
});

module.exports = mongoose.model("Startup", startupSchema);
