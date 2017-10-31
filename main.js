
var WelcomeMessage = prompt("Which calculator would you like to use. Type a for basic, b for advanced, m for BMI and t for trip calculator")

if ( WelcomeMessage == "a") {
  var a = prompt("Enter your first number");
  var op = prompt("please choose from the following *, /, +, -");
  var b = prompt("Enter your second number");

  switch (op) {
    case "*":
    var multiply = parseInt(a)*parseInt(b);
    alert("Your answer is " + multiply);
    break;
    case "/":
    var divide = parseInt(a)/parseInt(b);
    if ( b =="0") {
      alert("Error!, Cannot divide by 0");
    }else if (b != 0) {
      alert("Your answer is " + divide);
    }
    break;
    case "+":
    var add = parseInt(a)+parseInt(b);
    alert("Your answer is " + add);
    break;
    case "-":
    var minus = parseInt(a)-parseInt(b);
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

if (WelcomeMessage == "m") {
  var a = prompt("please enter your weight(kg)");
  var b = prompt("please enter your height(m)")
  var heimet = parseFloat(b);
  var hsqr = Math.pow(heimet,2);
  var bmi = parseInt(a) / hsqr;
  alert("Your BMI is " + bmi);
}

if (WelcomeMessage == "t") {
  var mpg = prompt("Enter your fuel efficiency(mpg)");
  var cost = prompt("Enter your cost per gallon");
  var distance = prompt("Enter the distance travelled");
  var speed = prompt("Enter your speed(in hours)");

  var time = (parseInt(distance)) / (parseInt(speed));
  var totcost = parseInt(mpg) * parseFloat(cost);

  if (distance > "60") {
    var diff = (parseInt(distance) - 60)*2;
    var Nmpg = (parseInt(mpg) - diff) * cost;
    alert("Your trip will take " + time + "hours and will cost: £ " +Nmpg );
  } else {
    alert("Your trip will take " + time + "hours and will cost: £" + totcost)
  }
  }
