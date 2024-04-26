function greet (name){
  console.log(`Hello, ${name}`)
}
greet("aditya")


// Function to calculate the area of a rectangle
function calcArea(width, height) {
  var area = width * height; // Calculate the area by multiplying length (a) by width (b)
  console.log(`Area of Rectangle is :- ${area}cm`); // Output the result
}

// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(F) {
  var convert = (F - 32) * 5/9; // Fahrenheit to Celsius using the formula
  console.log(parseInt(convert), "C"); // Output the result
}

// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(C) {
  var convert = (C * 9/5) + 32; //  Celsius to Fahrenheit using the formula
  console.log(parseInt(convert), "F"); // Output the result
}

// Example usage of the functions:
calcArea(10, 14); // Calculate the area of a rectangle with width 10 and height 14
fahrenheitToCelsius(-459.67); // Convert -459.67°F to Celsius
celsiusToFahrenheit(0); // Convert 0°C to Fahrenheit

