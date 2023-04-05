// page 41 - module 5

const addNumbers = (req, res) => {

    let number1=parseInt(req.query.number1);
    let number2=parseInt(req.query.number2);
    let sum=number1+number2

    

    res.status(200)
    res.json({result:sum})
}

module.exports = {
    addNumbers
}