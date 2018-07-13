// Function - input (argument), code, output

let greetUser = function () {
  console.log('Welcome User!');
}

greetUser();
greetUser();
greetUser();

let square = function (num) {
  let result = num * num
  return result
}

let value = square(3);
let otherValue = square(10);

console.log(value);
console.log(otherValue);

// Challenge area

let ConvertFahrenheitToCelsius = function (fahrenheit) {
  let celsius = (fahrenheit -32) * 5/9
  return celsius
}

// Call a couple of time (32 -> 0) (68 -> 20)
let firstF = ConvertFahrenheitToCelsius(32)
let secondF = ConvertFahrenheitToCelsius(68)

// Print the converted values
console.log(firstF);
console.log(secondF);
