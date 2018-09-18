const todo = {
  id: 'cwcuyxkjbwckhw',
  text: 'Pay bills',
  completed: false
}

const printTodo = ({ text, completed }) => {
  console.log(`${text}: ${completed}`)
}
printTodo(todo)

const { text:todoText, completed, details:otherDetails = 'No details', ...others } = todo

console.log(todoText)
console.log(completed)
console.log(otherDetails)
console.log(others)

const age = [65, 0, 13]
const [firstAge, ...otherAges] = age

console.log(firstAge)
console.log(otherAges)