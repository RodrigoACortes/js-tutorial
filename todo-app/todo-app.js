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

const filter = {
  searchText: ''
}

const renderTodos = function (toDos, filter) {
  const newTodoList = toDos.filter(function (toDo) {
    return toDo.text.toLowerCase().includes(filter.searchText.toLowerCase())
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

renderTodos(toDos,filter)

document.querySelector('#add-todo').addEventListener('click', function (e) {
  console.log('Added a note')
})

document.querySelector('#new-todo-text').addEventListener('input', function (e) {
  console.log(e.target.value)
})

document.querySelector('#search-todos-text').addEventListener('input', function (e) {
  filter.searchText = e.target.value
  renderTodos(toDos, filter)
})