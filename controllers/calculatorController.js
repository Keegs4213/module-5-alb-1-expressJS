// page 41 - module 5

const addGetNumbers = (req, res) => {

    let number1=parseInt(req.body.number1);
    let number2=parseInt(req.body.number2);
    let sum= number1 + number2

    res.status(200)
    res.json({result:sum})
}

const addPostNumbers = (req, res) => {
  let number1 = parseInt(req.body.number1);
  let number2 = parseInt(req.body.number2);
  let sum = number1 + number2;

  res.status(200);
  res.json({ result: sum });
};




module.exports = {
  addGetNumbers,
  addPostNumbers
};