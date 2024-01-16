
const express = require("express");
const startupController = require("../controllers/startupController");
const router = express.Router();

router.post('/profile',startupController.create)

module.exports=router