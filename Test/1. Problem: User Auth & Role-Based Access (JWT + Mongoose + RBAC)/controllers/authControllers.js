const bcrypt = require("bcrypt");
const User = require("../model/userModel.js");
const jwt = require("jsonwebtoken");

const onlyAdmin = async (req, res) => {
  try {
    res.status(200).json({ message: "Admin access granted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const onlyUser = async (req, res) => {
  try {
    res.status(200).json({ message: "User access granted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const registerUser = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;
    if (!username || !email || !password || !role) {
      return res.status(400).json({ error: "All fields are required" });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    const hash = await bcrypt.hash(password, 10);

    await User.create({ username, email, password: hash, role });

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(400).json({ error: "User does not exist" });
    }

    const isMatched = await bcrypt.compare(password, existingUser.password);
    if (!isMatched) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign(
      {
        id: existingUser._id,
        role: existingUser.role,
      },
      process.env.SECRET,
      { expiresIn: "1d" }
    );

    res.status(200).json({ message: "User logged in successfully", token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { onlyAdmin, onlyUser, registerUser, loginUser };
