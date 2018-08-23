const toDos = [
  {
    text: 'Buy a house',
    completed: true
  },
  {
    text: 'Buy a car',
    completed: true
  },
  {
    text: 'Job?',
    completed: true
  },
  {
    text: 'Study',
    completed: false
  },
  {
    text: 'Shop',
    completed: false
  }
]

const filters = {
  searchText: '',
  hideCompleted: false
}

const renderTodos = function (toDos, filters) {
  const newTodoList = toDos.filter(function (toDo) {
    const searchTextMatch = toDo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    const hideCompletedMatch = !filters.hideCompleted || !toDo.completed

    return searchTextMatch && hideCompletedMatch
  })

  document.querySelector('#todos-container').innerHTML = ''

  const toDosLeft = newTodoList.filter(function (toDo) {
    return !toDo.completed
  })

  const message = document.createElement('h2')
  message.textContent = `You have ${toDosLeft.length} toDos left`
  document.querySelector('#todos-container').appendChild(message)

  newTodoList.forEach(function (toDo) {
  const toDoShown = document.createElement('h3')
  toDoShown.textContent = toDo.text
  document.querySelector('#todos-container').appendChild(toDoShown)
  })
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
  renderTodos(toDos,filters)
  e.target.elements.newTodoText.value= ''
})

document.querySelector('#hide-completed').addEventListener('change', function (e) {
  filters.hideCompleted = e.target.checked
  renderTodos(toDos, filters)
})