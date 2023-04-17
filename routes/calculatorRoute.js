var express = require("express");

var router = express.Router();

var calculatorController = require("../controllers/calculatorController");

<<<<<<< HEAD
router.get("/add", calculatorController.addNumbers);
=======
//get returns the request body
router.get("/add", calculatorController.addGetNumbers);

//post request processes the request body
router.post("/add", calculatorController.addPostNumbers);


// path params
router.get('/subtract/:number1/:number2', (req, res) => {
    let number1 = parseInt(req.params.number1)
    let number2 = parseInt(req.params.number2)
    let result = number1 - number2
    console.log(req.params)
    res.status(200)
    res.json({result:result})
})

// request body - change to post method
router.post('/multiply', (req, res) => {
    let number1 = parseInt(req.body.number1)
    let number2 = parseInt(req.body.number2)
    let result = number1 * number2
    console.log(result)
    res.status(200)
    res.json({result:result})
})

// query parameters
router.get('/divide', (req, res) => {
    let number1 = parseInt(req.query.number1)
    let number2 = parseInt(req.query.number2)
    let result = number1 / number2
    console.log(result)
    res.status(200)
    res.json({result:result})
})

>>>>>>> 11b692cfb6cceda62748e8c2e01533ef43896a54

module.exports = router;
