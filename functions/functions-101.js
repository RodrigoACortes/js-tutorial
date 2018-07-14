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

let firstF = ConvertFahrenheitToCelsius(32)
let secondF = ConvertFahrenheitToCelsius(68)

console.log(firstF);
console.log(secondF);
