function calculator(equation) {
  let firstValue = parseFloat(equation.firstValue);
  let secondValue = parseFloat(equation.secondValue);
  let operator = equation.operator;
  switch(operator) {
    case "add":
      return firstValue + secondValue;
    case "subtract":
      return firstValue - secondValue;
    case "multiply":
      return firstValue * secondValue;
    case "divide":
      return firstValue / secondValue;
  }
}

module.exports = calculator;
