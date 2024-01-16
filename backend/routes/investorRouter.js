const express = require("express");
const investorController = require("../controllers/investorController");
const router = express.Router();



router.post('/profile',investorController.create)



module.exports=router