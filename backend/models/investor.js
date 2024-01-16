const mongoose = require("mongoose");

const investorSchema = mongoose.Schema(
  {
    fullname: {
      type: String,
      required: [true, "Please add "],
    },
    linkedInUrl: {
      type: String,
      required: [true, "Please add "],
    },
    firstname: {
      type: String,
      required: [true, "Please add "],
    },
    mobileNumber: {
      type: String,
      required: [true, "Please add "],
    },
    discribtion: {
      type: String,
      required: [true, "Please add "],
    },
    assetsOver2Cr: {
      type: String,
      required: [true, "Please add "],
    },
    country: {
      type: String,
      required: [true, "Please add "],
    },
    gender: {
      type: String,
      required: [true, "Please add "],
    },
    location: {
      type: String,
      required: [true, "Please add "],
    },
    professionalHeadline: {
      type: String,
      required: [true, "Please add "],
    },
    webSiteUrl: {
      type: String,
      required: [true, "Please add "],
    },
    summary: {
      type: String,
      required: [true, "Please add "],
    },
    alternativeMobileNumber: {
      type: String,
      required: [true, "Please add "],
    },
    sector: {
      type: String,
      required: [true, "Please add "],
    },
  },
  {
    timestamps: true,
  }
);

module.exports=mongoose.model("Investor",investorSchema)