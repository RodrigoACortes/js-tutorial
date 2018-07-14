// Global scope (convertFahrenheitToCelsius, firstF, secondF)
  // Local scope (fahrenheit, celsius)
    // Local scope (isFreezing)

let convertFahrenheitToCelsius = function (fahrenheit) {
  let celsius = (fahrenheit -32) * 5/9

  if (celsius <= 0) {
    let isFreezing = true
  }

  return celsius
}

let firstF = convertFahrenheitToCelsius(32)
let secondF = convertFahrenheitToCelsius(68)

console.log(firstF);
console.log(secondF);