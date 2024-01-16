const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// GET all users
// router.get("/", userController.getAll);

// // GET user by ID
// router.get("/:id", userController.getById);

// Register a new user
router.post("/register", userController.registerUser);

//Login a user
router.post("/login", userController.loginUser);

//Forgot password
router.post("/forgot-password",userController.forgotPassword)

//Reset password
router.post("/reset-password/:id/:token", userController.resetPassword);

// UPDATE user by ID
// router.put("/:id", userController.updateById);

// // DELETE user by ID
// router.delete("/:id", userController.deleteById);

module.exports = router;
