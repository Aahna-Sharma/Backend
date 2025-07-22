const express = require('express');
const { connectDB } = require("./utils/db");
const Router = require("./routes/apiroutes");

const app = express();
app.use(express.json()); 

connectDB();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("/blog", Router)

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
