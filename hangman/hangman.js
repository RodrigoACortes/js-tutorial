class Hangman {
  constructor(word, amountOfGuesses) {
    this.word = word.toLowerCase().split('')
    this.amountOfGuesses = amountOfGuesses
    this.guessedLetters = []
    this.status = 'playing'
  }
  get puzzle() {
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
  guessLetter(guessedLetter) {
    let guess = guessedLetter.toLowerCase()
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
  get statusMessage() {
    let status = this.status

    if (status === 'playing') {
      return `Guesses left: ${this.amountOfGuesses}`
    } else if (status === 'failed') {
      return `Nice try! The word was "${this.word.join('')}"`
    } else if (status === 'finished') {
      return 'Great work, you guessed the word'
    }
  }
  display() {
    const body = document.querySelector('body')
    const divElement = document.createElement('div')
    const wordElement = document.createElement('p')
    const resetButton = document.createElement('button')
    let messageElement = document.createElement('p')

    body.innerHTML = ''

    body.appendChild(divElement)

    wordElement.textContent = this.puzzle
    divElement.appendChild(wordElement)

    messageElement.textContent = this.statusMessage
    divElement.appendChild(messageElement)

    resetButton.textContent = 'Reset'
    divElement.appendChild(resetButton)
    resetButton.addEventListener('click', startGame)
  }
  statusRecalculation() {
    let finished = true
    let guesses = this.amountOfGuesses

    this.word.forEach(letter => {
      if (this.guessedLetters.includes(letter) || letter === ' ') {

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
}