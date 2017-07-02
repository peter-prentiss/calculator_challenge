function equalMachine(equation) {
  let firstValue = parseFloat(equation.firstValue);
  let secondValue = parseFloat(equation.secondValue);
  let operator = equation.operator;
  if (operator === "add") {
    return firstValue + secondValue;
  } else if (operator === "subtract") {
    return firstValue - secondValue;
  } else if (operator === "multiply") {
    return firstValue * secondValue;
  } else if (operator === "divide") {
    return firstValue / secondValue;
  }
}

module.exports = equalMachine;
