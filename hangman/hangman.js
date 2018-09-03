const Hangman = function (word, amountOfGuesses) {
  this.word = word.toLowerCase().split('')
  this.amountOfGuesses = amountOfGuesses
  this.guessedLetters = []
  this.status = 'playing'
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

Hangman.prototype.guessLetter = function (guessedLetter) {
  guess = guessedLetter.toLowerCase()
  const uniqueGuess = !this.guessedLetters.includes(guess)
  const wrongGuess = !this.word.includes(guess)

  if (this.status !== 'playing') {
    return
  }

  if (uniqueGuess) {
    this.guessedLetters.push(guessedLetter)
  }

  if (uniqueGuess && wrongGuess) {
      this.amountOfGuesses--
  }

  this.statusRecalculation()
}

Hangman.prototype.statusMessage = function () {
  let status = this.status

  if (status === 'playing') {
    return `Guesses left: ${this.amountOfGuesses}`
  } else if (status === 'failed') {
    return `Nice try! The word was "${this.word.join('')}"`
  } else if (status === 'finished') {
    return 'Great work, you guessed the word'
  }
}

Hangman.prototype.display = function () {
  const body = document.querySelector('body')
  const divElement = document.createElement('div')
  const wordElement = document.createElement('p')
  let messageElement = document.createElement('p')

  body.innerHTML = ''

  body.appendChild(divElement)

  wordElement.textContent = this.getPuzzle()
  divElement.appendChild(wordElement)

  messageElement.textContent = this.statusMessage()
  divElement.appendChild(messageElement)
}

Hangman.prototype.statusRecalculation = function () {
  let finished = true
  let guesses = this.amountOfGuesses

  this.word.forEach(letter => {
    if (this.guessedLetters.includes(letter)) {

    } else {
      finished = false
    }

    if (guesses === 0) {
      this.status = 'failed'
    } else if (finished) {
      this.status = 'finished'
    } else {
      this.status = 'playing'
    }
  })
}