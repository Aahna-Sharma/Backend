const express = require("express");
const router = express.Router();
const verifyToken = require("./middleware");
const authController = require("./authController");

router.get("/dashboard", verifyToken, authController.forValidUser);
router.post("/register", authController.registerUser);
router.post("/login", authController.loginUser);

module.exports = router;
