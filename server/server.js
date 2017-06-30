let express = require('express');
let app = express();
let path = require('path');
let port = 6969;
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
let firstValue;
let secondValue;
let operator;
let answer;

app.post('/calculate', function(req, res) {
  let equation = req.body;
  firstValue = parseInt(equation.firstValue);
  secondValue = parseInt(equation.secondValue);
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
  console.log(answer);
  res.sendStatus(200);
});

app.get('/calculate', function(req,res) {
  res.send(answer.toString());
})

app.get('/*', function(req, res) {
  let file = req.params[0] || '/views/index.html';
  res.sendFile(path.join(__dirname, '/public', file));
});

app.listen(port, function() {
  console.log('Server running on port', port);
});
