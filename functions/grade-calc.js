// Student score, total possible score
// 15/20 -> You got a C (75%)!
// A 100-90, B 89-80, C 79-70, D 69-60, F 59-0

const score = (studentScore, possibleScore) => {
  const percentage = (studentScore / possibleScore) * 100
  let letterGrade = ''

  if (percentage >= 90) {
    letterGrade = 'A'
  } else if (percentage >= 80) {
    letterGrade = 'B'
  } else if (percentage >= 70) {
    letterGrade = 'C'
  } else if (percentage >= 60) {
    letterGrade = 'D'
  } else {
    letterGrade = 'F'
  }
  return `You got a ${letterGrade} (${percentage}%)!`
}

console.log(score(95, 100));
console.log(score(85, 100));
console.log(score(75, 100));
console.log(score(65, 100));
console.log(score(2, 100));
