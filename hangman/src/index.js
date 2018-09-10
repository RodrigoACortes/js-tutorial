import Hangman from './hangman'
import getPuzzle from './requests'

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

export { startGame }