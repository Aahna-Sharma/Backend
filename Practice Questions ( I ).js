const express = require('express');
const app = express();
const port = 3000;
app.use(express.json()); // Middleware to parse JSON bodies


//this route will take name and message from body and pass it to user in response
app.post("/feedback", (req, res) => {
    const name = req.body.name;
    const message = req.body.message;
    res.send(`Thank you, ${name}, for your message: "${message}"`);
});


//this route will take a number and send the square root in response
app.post("/getSqrt", (req, res) => {
  const num = req.body.num;
  res.send(`The Square Root of the number is: ${Math.sqrt(num)}`);
});


// this route will send back the current time in response
app.get("/time", (req, res) => {
  const currentTime = new Date();
  res.send(`The current time is: ${currentTime}`);
});


// /addFruitsName its will add element in the arr in server side and send back the while array in response
const fruits = ["Apple", "Banana", "Orange"];
app.post("/addFruitsName", (req, res) => {
  const fruitsName = req.body.fruitsName;
  fruits.push(fruitsName);
  res.send(`The current fruits in the array are: ${fruits.join(", ")}`);
});


// /add num1, num2 res = a+b
app.post("/getSum", (req, res) => {
  const num1 = req.body.num1;
  const num2 = req.body.num2;
  res.send(
    `The sum of the numbers are: ${num1 + num2}`
  );
});


//addnotes add notes to the file that will be created on server by fs 
const fs = require("fs");
app.post("/addNotes", (req, res) => {
  const note = req.body.note;

  if (!fs.existsSync('notes.txt')) {
    fs.writeFileSync('notes.txt', note);
    res.send(`File Created Successfully! \n First Note added: ${note}`);
  }

  else {
    fs.appendFileSync('notes.txt', `\n${note}`);
    res.send(
      `New Note added: \n ${note} \n
      All Notes: \n ${fs.readFileSync('notes.txt', 'utf8')}`
    );
  }
  
});


app.listen(port, () => {
  console.log(`Your server is running at http://localhost:${port}`);
});

