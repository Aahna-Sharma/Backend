const express = require("express");
const { createBlog } = require("../controllers/blogcontrollers");
const userControllers = require("../controllers/usercontrollers");
const upload = require("../multer");

const { verifyToken } = require("../middleware/Auth middleware");
const requireRole = require("../middleware/RBAC middleware");

const router = express.Router();

router.post( "/createblog",verifyToken, requireRole("admin", "author"), upload.single("image"), createBlog );
router.post("/Register", userControllers.registerUser);
router.post("/Login", userControllers.loginUser);

module.exports = router;
