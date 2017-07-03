const express = require('express');
const router = express.Router();
const calculator = require('../modules/calculator.js');
let answer;

//uses calculator module to define answer
router.post('/', (req, res) => {
  let equation = req.body;
  answer = calculator(equation);
  res.sendStatus(200);
});

//sends back answer as string
router.get('/', (req, res) => {
  res.send(answer.toString());
});

module.exports = router;
