function addition(req, res) {
  const a = req.body.a;
  const b = req.body.b;
  res.send(`The sum of the numbers are: ${a + b}`);
}

function multiplication(req, res) {
  const a = req.body.a;
  const b = req.body.b;
  res.send(`The product of the numbers are: ${a * b}`);
}

function division(req, res) {
  const a = req.body.a;
  const b = req.body.b;
  res.send(`The division of the numbers are: ${a / b}`);
}

function squared(req, res) {
  const a = req.body.a;
  res.send(`The Square of ${a} is: ${a * a}`);
}

function sqrt(req, res) {
  const num = req.body.num;
  res.send(`The Square Root of ${num} is: ${Math.sqrt(num)}`);
}

module.exports = {
  addition,
  multiplication,
  division,
  squared,
  sqrt
};
