const express = require("express");
const MathsRouter = require("./Routes/Maths");
const FilesRouter = require("./Routes/Files");

const app = express();


app.use(express.json());
const port = 3000;

app.use("/Maths", MathsRouter);
app.use("/Files", FilesRouter);

app.get("/", (req, res) => {
  res.send("The Server is working");
});

app.listen(port, () => {
  console.log(`Server is working on httop://localhost:${port}`);
});
