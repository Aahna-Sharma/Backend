const express = require("express");
const AuthRouter = require("./router/authRoute");
const { connectDB } = require("./utils/db");
require("dotenv").config();

const app = express();

app.use(express.json());

connectDB();

app.get("/", (req, res) => {
    res.send("HELLO");
});

app.use("/auth", AuthRouter)

app.listen(3000, () => {
    console.log("Server started on port http://localhost:3000");
});
