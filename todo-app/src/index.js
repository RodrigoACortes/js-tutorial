// Set up index.html to load the bundle
// Make sure to load uuid via an npm module when necessary

// --

// Add necessary imports
import { getFilters, setFilters } from './filters'
import { loadTodos, getTodos, saveTodos, createTodo, removeTodo, toggleTodo } from './todos'
import { renderTodos } from './views'

// Render initial todos
renderTodos()

// Set up search text handler
document.querySelector('#search-todos-text').addEventListener('input', (e) => {
  setFilters({
    searchText: e.target.value
  })
  renderTodos()
})

// Set up checkbox handler
document.querySelector('#hide-completed').addEventListener('change', (e) => {
  setFilters({
    hideCompleted: e.target.checked
  })
  renderTodos()
})

// Set up form submission handler
document.querySelector('#new-todo-form').addEventListener('submit', (e) => {
  e.preventDefault()
  const text = e.target.elements.newTodoText.value.trim()
  createTodo(text)
  renderTodos()
  e.target.elements.newTodoText.value= ''
})

// Bonus: Add a watcher for local storage
window.addEventListener('storage', (e) => {
  loadTodos()
  if (e.key === 'toDos') {
    renderTodos()
  }
})