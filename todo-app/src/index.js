import { getFilters, setFilters } from './filters'
import { getTodos, saveTodos, createTodo, removeTodo, toggleTodo } from './todos'

console.log(getTodos())
// createTodo('Test todo')
// removeTodo('cb4ca22f-77e9-46cf-bb89-ca8c1d546399')
toggleTodo('cb4ca22f-77e9-46cf-bb89-ca8c1d546399')
console.log(getTodos())

// console.log(getFilters())
// setFilters({
//   searchText: 'HI',
//   hideCompleted: true
// })
// console.log('-----------------------------------------')
// console.log(getFilters())


// console.log('hi')
// Set up index.html to load the bundle
// Make sure to load uuid via an npm module when necessary

// --

// Add necessary imports

// Render initial todos

// Set up search text handler

// Set up checkbox handler

// Set up form submission handler

// Bonus: Add a watcher for local storage