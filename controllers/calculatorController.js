// page 41 - module 5

<<<<<<< HEAD
// const addNumbers = (req, res) => {
//   // let number1=parseInt(req.query.number1);
//   // let number2=parseInt(req.query.number2);

//   let number1 = 5;
//   let number2 = 10;
//   let sum = math.add(number1, number2);

//   res.status(200);
//   res.json({ result: sum });
// };

//Module 5 page 55 ex 1

const Calculator = require("../libraries/calculator");
const Logger = require("../libraries/logger");

const myCalc = new Calculator();
const logger = new Logger("Calculator");

const addNumbers = (req, res) => {
  let number1 = parseInt(req.query.number1);
  let number2 = parseInt(req.query.number2);

  let sum = myCalc.add(number1, number2);

  logger.log(sum);
=======
const addGetNumbers = (req, res) => {

    let number1=parseInt(req.body.number1);
    let number2=parseInt(req.body.number2);
    let sum= number1 + number2
>>>>>>> 11b692cfb6cceda62748e8c2e01533ef43896a54

  res.status(200);
  res.json({ result: sum });
};

const addPostNumbers = (req, res) => {
  let number1 = parseInt(req.body.number1);
  let number2 = parseInt(req.body.number2);
  let sum = number1 + number2;

  res.status(200);
  res.json({ result: sum });
};




module.exports = {
<<<<<<< HEAD
  addNumbers,
};
=======
  addGetNumbers,
  addPostNumbers
};
>>>>>>> 11b692cfb6cceda62748e8c2e01533ef43896a54
