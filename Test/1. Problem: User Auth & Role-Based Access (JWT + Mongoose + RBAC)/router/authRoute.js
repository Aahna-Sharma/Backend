const express = require("express");
const router = express.Router();
const { requireRole } = require("../middleware");
const authController = require("../controllers/authControllers");


router.get("/only-Admin", requireRole("admin"), authController.onlyAdmin);
router.get("/only-User", requireRole("user"), authController.onlyUser);

router.post("/register", authController.registerUser);
router.post("/login", authController.loginUser);

module.exports = router;
