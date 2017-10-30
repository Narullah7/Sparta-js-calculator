
var WelcomeMessage = prompt("Which calculator would you like to use. Type a for basic, b for advanced and m for BMI")

if ( WelcomeMessage == "a") {
  var a = prompt("Enter your first number");
  var op = prompt("please choose from the following *, /, +, -");
  var b = prompt("Enter your second number");

  switch (op) {
    case "*":
    var multiply = a*b;
    alert("Your answer is " + multiply);
    break;
    case "/":
    var divide = a/b;
    if ( b =="0") {
      alert("Error!, Cannot divide by 0");
    }else if (b != 0) {
      alert("Your answer is " + divide);
    }
    break;
    case "+":
    var add = a+b;
    alert("Your answer is " + add);
    break;
    case "-":
    var minus = a-b;
    alert("Your answer is " + minus);
    break;
    default:
    console.log("Something went wrong!");
  }
} else {
console.log("hey");
}

if (WelcomeMessage == "b") {
var op = prompt("Please choose from the following square-root or power");

switch (op) {
  case "square root":
  var a = prompt("Please enter your number");
  if (a < 0) {
    alert("You cannot square-root a minus number")
  } else if (a >= 0) {
    var squareroot = Math.sqrt(a);
    alert("Your answer is " + squareroot);
  }
  break;
  case "power":
  var a = prompt("please choose your base number");
  var b = prompt("please choose your exponent");
  var power = Math.pow(a,b);
  alert("Your answer is " + power);
  break;
  default:
  alert("Something went wrong!");

}
}
