const express = require("express");
const controller = require("../controllers/StudentsControllers");
const router = express.Router();

router.post("/add", controller.addStudent);
router.get("/getSingleStudentById/:id", controller.getSingleStudentById);
router.get("/getSingleStudentByName/:name", controller.getSingleStudentByName);
router.get("/getAllStudents", controller.getAllStudents);
router.get("/getStudentsByQueries", controller.getStudentsByQueries);
router.put("/updateStudentById/:id", controller.updateStudentById);

module.exports = router;

