// Sparta Javascript Prompt Calculator

// Added a prompt to ask the user to choose between advanced and basc calculator
var whichCalculator = prompt("Which calculator would you like to use? Click (a) for advanced and (b) for basic (x) for BMI");

// Advanced calculator (a)
if (whichCalculator === 'a') {

	// Prompt to get the user to choose between power and sqr operation
	var powerOrSquareRoot = prompt("Please choose (p) for power function and (s) for squareroot");

		// Power operation
		if(powerOrSquareRoot === 'p') {
			// Prompt to get the fixed base for the power function
			var fixedBase = prompt("Please enter your fixed base");
			// Prompt to ask what user wanted fixed base raised to
			var raise = prompt("What would you like to raise " + fixedBase + " to?");
			// Power calculation and turning strings in integer before calculation
			var power = Math.pow(parseInt(fixedBase), parseInt(raise));
			// Show the result
			alert(fixedBase + " to the power of " + raise + " is " + power);

		// Squareroot operation
		} else if (powerOrSquareRoot === 's') {
			// Prompt to get what number the user wants the squareroot of
			var sqrtNum = prompt("What number would you like to get the square root of?");
			// js Math method to find the sqrt of sqrtNum after its changed to integer;
			var root = Math.sqrt(parseInt(sqrtNum));
			// Show the result
			alert ("The squareroot of " + sqrtNum + " is " + root);
		} else {
			alert("Error - Please select correct Calculator");
		}

// Basic calculator (b)
} else if (whichCalculator === 'b') {

	// Prompts to get calculation values and operator
	var firstIntChoice = prompt("Please enter the first number in your calculation");
	var operationChoice = prompt("What operator would you like to use? + - / *");
	var secondIntChoice = prompt("Please enter the second number in your calculation");
	var result = 0

	// Control flow for the operators
	// Added parseFloat to work with floats
	if (operationChoice === "+") {
		// Calculation for Additon
		result = parseFloat(firstIntChoice) + parseFloat(secondIntChoice);
	} else if (operationChoice === "-") {
		// Calculation for Minus
		result = parseFloat(firstIntChoice) - parseFloat(secondIntChoice);
	} else if (operationChoice === "/") {
		// Calculation for Divide
		result = parseFloat(firstIntChoice) / parseFloat(secondIntChoice);
	} else if (operationChoice === "*") {
		// Calculation for Times
		result = parseFloat(firstIntChoice) * parseFloat(secondIntChoice);
	} else {
		alert("Error");
	}

	// Show the result
	alert(firstIntChoice + " " + operationChoice + " " + secondIntChoice + " = " + result);

// BmiCalculator
} else if (whichCalculator === 'x') {
	var weight = prompt("To calculate your BMI please enter your weight in (kg) first!");
	var height = prompt("Next please enter your height in (m) next!");
	var topBmi = weight / height;
	var bmi = topBmi / height;
	// Show BMI
	alert("Your BMI is " + bmi + " !");
}
