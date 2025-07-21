const express = require("express");
const router  = require("./authRoute");
const { connectDB }= require("./db.js");

const app = express();
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("/user", router)

app.listen(3000, () => {
    console.log("Server started on port http://localhost:3000");
})
