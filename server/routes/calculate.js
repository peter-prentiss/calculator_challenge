var express = require('express');
var router = express.Router();
let firstValue;
let secondValue;
let operator;
let answer;

router.post('/', function(req, res) {
  // let timer = setTimeout(function() {
    let equation = req.body;
    firstValue = parseFloat(equation.firstValue);
    secondValue = parseFloat(equation.secondValue);
    operator = equation.operator;
    if (operator === "add") {
      answer = firstValue + secondValue;
    } else if (operator === "subtract") {
      answer = firstValue - secondValue;
    } else if (operator === "multiply") {
      answer = firstValue * secondValue;
    } else if (operator === "divide") {
      answer = firstValue / secondValue;
    }
  // }, 3000);
  // timer.unref();
  console.log(answer);
  res.sendStatus(200);
});

router.get('/', function(req, res) {
  console.log(answer);
  res.send(answer.toString());
})

module.exports = router;
