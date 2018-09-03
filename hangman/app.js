const word = new Hangman('Cat', 2)

word.display()

window.addEventListener('keypress', function (e) {
  const guess = String.fromCharCode(e.charCode)
  word.guessLetter(guess)
  word.display()
  word.statusRecalculation()
})