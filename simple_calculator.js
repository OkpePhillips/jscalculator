alert("Welcome to the Calculator page. Click OK to proceed");

let num1 = parseFloat(prompt("Enter the first number"));
let operator = prompt("Choose an operator : +, -, *, /, %");
let num2 = parseFloat(prompt("Enter the second number"));

if (operator == "+") {
  alert("Result = " + (num1 + num2));
} else if (operator == "-") {
  alert("Result = " + (num1 - num2));
} else if (operator == "*") {
  alert("Result = " + num1 * num2);
} else if (operator == "/") {
  alert("Result = " + num1 / num2);
} else if (operator == "%") {
  alert("Result = " + (num1 % num2));
} else alert("Invalid operator selected.");
