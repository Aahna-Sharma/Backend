const express = require("express");
const mongoose = require("mongoose");
const Students = require("./Students");

const app = express();
app.use(express.json());

function connectToDatabase() {
  mongoose
    .connect("mongodb://localhost:27017/StudentsDatabase")
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("MongoDB connection error:", err));
}

connectToDatabase();

app.post("/addStudent", async (req, res) => {
  try {
    const { name, email, age, rollNo, gender } = req.body;
    const newStudent = new Students({
      name,
      rollNo,
      age,
      gender,
      email
    });

    await newStudent.save();
    res.status(201).send("Student added successfully");
  } catch (error) {
    res.status(400).send(`Error adding student: ${error.message}`);
  }
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
