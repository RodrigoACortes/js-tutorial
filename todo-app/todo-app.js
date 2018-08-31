const toDos = getSavedTodos()

const filters = {
  searchText: '',
  hideCompleted: false
}

renderTodos(toDos, filters)

document.querySelector('#search-todos-text').addEventListener('input', (e) => {
  filters.searchText = e.target.value
  renderTodos(toDos, filters)
})

document.querySelector('#new-todo-form').addEventListener('submit', (e) => {
  e.preventDefault()
  const newTodo = {
    id: uuidv4(),
    text: e.target.elements.newTodoText.value,
    completed: false
  }
  toDos.push(newTodo)
  saveTodos(toDos)
  renderTodos(toDos, filters)
  e.target.elements.newTodoText.value= ''
})

document.querySelector('#hide-completed').addEventListener('change', (e) => {
  filters.hideCompleted = e.target.checked
  renderTodos(toDos, filters)
})