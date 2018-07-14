// Multiple arguments
let add = function (a, b, c) {
  return a + b + c
}

let result = add(10, 1, 5)
console.log(result);

// Default arguments
let getScoreText = function (name = 'Anonymous', score = 0) {
  return `Name: ${name} - Score: ${score}`
  // return 'Name: ' + name + ' - Score: ' + score
}

let scoreText = getScoreText(undefined, 99);

console.log(scoreText);

// Challenge area
// total, tipPercent (.2)

let tip = function (total, tipPercent = 0.2) {
  let percent = tipPercent * 100
  let totalTip = total * tipPercent
  return `A ${percent}% tip on $${total} would be $${totalTip}`
}

let totalTip = tip(100)
let totalTip1 = tip(100, 0.5)
let totalTip2 = tip(50)
console.log(totalTip);
console.log(totalTip1);
console.log(totalTip2);