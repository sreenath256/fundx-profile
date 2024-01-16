const asyncHandler = require("express-async-handler");
const Investor = require("../models/investor");

const investorController = {
  create: asyncHandler(async (req, res) => {
    const {
      fullname,
      linkedInUrl,
      firstname,
      mobileNumber,
      discribtion,
      assetsOver2Cr,
      country,
      gender,
      location,
      professionalHeadline,
      webSiteUrl,
      summary,
      alternativeMobileNumber,
      sector,
    } = req.body;
    if (
      !fullname ||
      !linkedInUrl ||
      !firstname ||
      !mobileNumber ||
      !discribtion ||
      !assetsOver2Cr ||
      !country ||
      !gender ||
      !location ||
      !professionalHeadline ||
      !webSiteUrl ||
      !summary ||
      !alternativeMobileNumber ||
      !sector
    ) {
      res.status(400);
      throw new Error("All fileds are mantatory");
    }

    const investor = await Investor.create({
      fullname,
      linkedInUrl,
      firstname,
      mobileNumber,
      discribtion,
      assetsOver2Cr,
      country,
      gender,
      location,
      professionalHeadline,
      webSiteUrl,
      summary,
      alternativeMobileNumber,
      sector,
    });

    if(investor){
        res.status(201).json({
            fullname:investor.fullname,
            mobileNumber:investor.mobileNumber
        })
    }else{
        res.status(400)
        throw new Error("Datas are not valid")
    }
  }),
};

module.exports = investorController;
