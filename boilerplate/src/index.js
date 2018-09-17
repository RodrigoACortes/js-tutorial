const calculateAverage = (...numbers) => {
  // return (num1 + num2) / 2
  let sum = 0
  numbers.forEach(num => sum += num)
  return sum / numbers.length
}

console.log(calculateAverage(0, 100, 88, 64))