let word

window.addEventListener('keypress', (e) => {
  const guess = String.fromCharCode(e.charCode)
  word.guessLetter(guess)
  word.display()
  word.statusRecalculation()
})

const startGame = async () => {
  const puzzle = await getPuzzle('2')
  word = new Hangman(puzzle, 5)
  word.display()
}

startGame()

// getPuzzle('3').then((puzzle) => {
//   console.log(puzzle)
// }).catch((err) => {
//   console.log(`Error: ${err}`)
// })

// word.resetButton.addEventListener('click', startGame)

// getCurrentCountry().then((country) => {
//   console.log(country.name)
// }).catch((err) => {
//   console.log(err)
// })