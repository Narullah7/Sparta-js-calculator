
var WelcomeMessage = prompt("Which calculator would you like to use. Type a for basic, b for basic and m for BMI")

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

if () {

}
