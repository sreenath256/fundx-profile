const asyncHandler = require("express-async-handler");
const Startup = require("../models/startup");

const startupController = {
  create: asyncHandler(async (req, res) => {
    const {
      name,
      gender,
      linkedInUrl,
      singleFounder,
      email,
      phoneNumber,
      startupName,
      stageOfStartup,
      webSiteUrl,
      companyType,
      registeredName,
      sector,
      monthAndYearOfIncorparation,
      cityOfOperation,
      discriptionAboutStartup,
    } = req.body;

    if (
      !name ||
      !gender ||
      !linkedInUrl ||
      !singleFounder ||
      !email ||
      !phoneNumber ||
      !startupName ||
      !stageOfStartup ||
      !webSiteUrl ||
      !companyType ||
      !registeredName ||
      !sector ||
      !monthAndYearOfIncorparation ||
      !cityOfOperation ||
      !discriptionAboutStartup
    ) {
      res.status(400);
      throw new Error("All fields are mantatory");
    }

    const startup = await Startup.create({
      name,
      gender,
      linkedInUrl,
      singleFounder,
      email,
      phoneNumber,
      startupName,
      stageOfStartup,
      webSiteUrl,
      companyType,
      registeredName,
      sector,
      monthAndYearOfIncorparation,
      cityOfOperation,
      discriptionAboutStartup,
    });

    if(startup){
        res.status(201).json({
            status:"Startup registered",
            name:startup.name,

        })
    }else{
        res.status(400)
        throw new Error("Datas are not valid")
    }
  }),
};
module.exports=startupController
