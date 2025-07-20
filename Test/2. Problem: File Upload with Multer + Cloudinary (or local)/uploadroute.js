const express = require("express");
const multer = require("./multer"); 
const Upload = require("./uploadModel");
const cloudinary = require("./cloudinary");

const router = express.Router();

router.post("/", multer.single("image"), async (req, res) => {
  try {

    console.log("File uploaded:", req.file);

    if (!req.file) return res.status(400).json({ message: "No file uploaded" });

    const result = await cloudinary.uploader.upload(req.file.path, {
      resource_type: "image",
    });

  const uploadDoc = new Upload({ url: result.secure_url });
  await uploadDoc.save();

    res.status(200).json({
      message: "File uploaded successfully",
      url: result.secure_url,
    });
  } catch (error) {
    res.status(500).json({
      message: "File could not be uploaded",
      error: error.message,
    });
  }
});

module.exports = router;
