// page 41 - module 5

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

  res.status(200);
  res.json({ result: sum });
};

module.exports = {
  addNumbers,
};
