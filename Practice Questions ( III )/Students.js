const mongoose = require("mongoose");

const StudentsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },

    rollNo: {
      type: Number,
      required: [true, "Roll number is required"],
    },

    age: {
      type: Number,
      required: [true, "Age is required"],
      min: [15, "Age must be at least 15"],
      max: [30, "Age must be less than or equal to 30"],
    },

    gender: {
      type: String,
      enum: ["Male", "Female"],
      required: [true, "Gender is required"],
    },

    email: {
      type: String,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const Students = mongoose.model("Students", StudentsSchema);

module.exports = Students;
