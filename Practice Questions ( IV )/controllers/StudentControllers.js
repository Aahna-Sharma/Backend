const Student = require("../Models/Student");

const addStudent = async (req, res) => {
  try {
    const {
      name,
      age,
      class: classname,
      fee,
      address: { city, state },
    } = req.body;
    const newStudent = new Student({
      name,
      age,
      class: classname,
      fee,
      address: { city, state },
    });

    await newStudent.save();
    res
      .status(201)
      .json({ message: "Student added successfully", student: newStudent });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getSingleStudentById = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findById(id);
    res.status(200).json(student);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getSingleStudentByName = async (req, res) => {
  try {
    const { name } = req.params;
    console.log("Searching for student with name:", name); // Debug log

    const student = await Student.findOne({ name });

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ error: `Error fetching student: ${error.message}` });
  }
};

const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getStudentsByQueries = async (req, res) => {
  try {
    const { class: classname, fee, city, state } = req.query;

    const students = await Student.find({
      $or: [
        classname && { class: classname },
        fee && { fee: +fee },
        city && { "address.city": city },
        state && { "address.state": state },
      ],
    });

    res.status(200).json(students);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateStudentById = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      age,
      class: classname,
      fee,
      address, 
    } = req.body;

    const updatedStudent = await Student.findByIdAndUpdate(
      id,
      { name, age, class: classname, fee, address },
      { new: true }
    );

    res.status(200).json({
      message: "Student updated successfully",
      student: updatedStudent,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  addStudent,
  getSingleStudentById,
  getSingleStudentByName,
  getAllStudents,
  getStudentsByQueries,
  updateStudentById,
};


