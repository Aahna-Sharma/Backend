const Blog = require("../models/blogModel.js");

const createBlog = async (req, res) => {
  try {
    const { title, body } = req.body;
    if (!title || !body|| !req.file) {
      return res.status(400).json({ message: "All fields are required" });
    }
  
    const blog = new Blog({
      title,
      body,
      image: req.file.path,
      createdBy: req.user._id,
    });

    await blog.save();
    res.status(201).json({ message: "Blog created successfully", blog });
  }
  catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
    createBlog
}
