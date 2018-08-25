const toDos = getSavedTodos()

const filters = {
  searchText: '',
  hideCompleted: false
}

renderTodos(toDos, filters)

document.querySelector('#search-todos-text').addEventListener('input', function (e) {
  filters.searchText = e.target.value
  renderTodos(toDos, filters)
})

document.querySelector('#new-todo-form').addEventListener('submit', function (e) {
  e.preventDefault()
  const newTodo = {
    text: e.target.elements.newTodoText.value,
    completed: false
  }
  toDos.push(newTodo)
  saveTodos(toDos)
  renderTodos(toDos, filters)
  e.target.elements.newTodoText.value= ''
})

document.querySelector('#hide-completed').addEventListener('change', function (e) {
  filters.hideCompleted = e.target.checked
  renderTodos(toDos, filters)
})