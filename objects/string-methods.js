// let name = '    My Name    '

// Length property
// console.log(name.length)

// Convert to uppercase
// console.log(name.toUpperCase())

// Convert to lowercase
// console.log(name.toLowerCase())

// Includes method
// let password = 'abc12cvefcvf098'
// console.log(password.includes('password'))

// Trim
// console.log(name.trim())

// Challenge area

// isValidPassword
let isValidPassword = (passwordProvided) => {
  let passTrim = passwordProvided.trim()
  let passLength = passTrim.length
  let passIncludesPassword = passTrim.includes('password')

  return (passLength > 8 && (passIncludesPassword === false))
}

console.log(isValidPassword('asdfp'));
console.log(isValidPassword('abc123!@#$%^&'));
console.log(isValidPassword('jhvxdsvjhcvdsjhcbvjdshpassword'));