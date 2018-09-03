const Hangman = function (word, amountOfGuesses) {
  this.word = word.toLowerCase().split('')
  this.amountOfGuesses = amountOfGuesses
  this.guessedLetters = ['c', 'e', 'w']
}

Hangman.prototype.getPuzzle = function () {
  let puzzle = ''

  this.word.forEach(letter => {
    if (this.guessedLetters.includes(letter) || letter === ' ') {
      puzzle += letter
    } else {
      puzzle += '*'
    }
  })

  return puzzle
}

const word1 = new Hangman('Car', 2)
console.log(word1.getPuzzle())

const word2 = new Hangman('New York', 3)
console.log(word2.getPuzzle())