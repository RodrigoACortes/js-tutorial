const getPuzzle = async (wordCount) => {
  const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)

  if (response.status === 200) {
    const data = await response.json()
    return data.puzzle
  } else {
    throw new Error('Unable to get puzzle')
  }
}

const getPuzzleOld = (wordCount) => {
  return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
    if (response.status === 200) {
      return response.json()
    } else {
      throw new Error('Unable to fetch the puzzle')
    }
  }).then((data) => {
    return data.puzzle
  })
}

const getCountry = (countryCode) => {
  return fetch(`http://restcountries.eu/rest/v2/all`).then((response) => {
    if (response.status === 200) {
      return response.json()
    } else {
      throw new Error('Unable to get country data')
    }
  }).then((data) => {
    return data.find(country => country.alpha2Code === countryCode)
  })
}

const getLocation = () => {
  return fetch('https://ipinfo.io/json?token=5122c396c68ac6').then(response => {
    if (response.status === 200) {
      return response.json()
    } else {
      throw new Error('Unable to get location')
    }
  })
}