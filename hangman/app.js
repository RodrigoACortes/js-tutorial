const word = new Hangman('Cat Mouse', 2)

word.display()

window.addEventListener('keypress', (e) => {
  const guess = String.fromCharCode(e.charCode)
  word.guessLetter(guess)
  word.display()
  word.statusRecalculation()
})

getPuzzle('3').then((puzzle) => {
  console.log(puzzle)
}).catch((err) => {
  console.log(`Error: ${err}`)
})

getCountry('US').then((country) => {
  console.log(country.name)
}).catch((err) => {
  console.log(`Error: ${err}`)
})

getLocation().then(location => {
  console.log(`You are currently in ${location.city} ${location.region}, ${location.country}.`)
}).catch(err => {
  console.log(`Error: ${err}`)
})

