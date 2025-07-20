const express = require("express");
const { connectDB } = require("./db");
const uploadRoute = require("./uploadroute");
const dotenv = require("dotenv");

dotenv.config(); 

const app = express();
connectDB();

app.get("/", (req, res) => {
  res.send("HELLO");
});

app.use("/upload", uploadRoute);

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
