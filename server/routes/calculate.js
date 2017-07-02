let express = require('express');
let router = express.Router();
var equals = require('../modules/equalMachine.js');
let answer;

//sets values equal to properties of object,
//performs logic to do equation
router.post('/', function(req, res) {
    let equation = req.body;
    answer = equals(equation);
  res.sendStatus(200);
});

//sends back answer as string
router.get('/', function(req, res) {
  res.send(answer.toString());
})

module.exports = router;
