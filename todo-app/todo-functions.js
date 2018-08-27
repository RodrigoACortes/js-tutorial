const getSavedTodos = function () {
  const todoJSON = localStorage.getItem('toDos')

  if (todoJSON !== null) {
    return JSON.parse(todoJSON)
  } else {
    return []
  }
}

const saveTodos = function (toDos) {
  localStorage.setItem('toDos', JSON.stringify(toDos))
}

const removeTodo = function (id) {
  const toDoIndex = toDos.findIndex(function (toDo) {
    return toDo.id = id
  })
  if (toDoIndex > -1) {
    toDos.splice(toDoIndex, 1)
  }
}

// Get DOM elements for an individual note
const generateTodoDOM = function (toDo) {
  const toDoDiv = document.createElement('div')
  const checkbox = document.createElement('input')
  const toDoShownText = document.createElement('span')
  const removeButton = document.createElement('button')

  // Setup todo checkbox
  checkbox.setAttribute('type', 'checkbox')
  checkbox.checked = toDo.completed
  toDoDiv.appendChild(checkbox)

  // Setup todo text
  toDoShownText.textContent = toDo.text
  toDoDiv.appendChild(toDoShownText)

  // Setup remove button
  removeButton.textContent = 'x'
  toDoDiv.appendChild(removeButton)
  removeButton.addEventListener('click', function () {
    removeTodo(toDo.id)
    saveTodos(toDos)
    renderTodos(toDos, filters)
  })

  return toDoDiv
}

// Get the DOM elements for summary
const generateSummaryDOM = function (toDosLeft) {
  const message = document.createElement('h2')
  message.textContent = `You have ${toDosLeft.length} toDos left`
  return message
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

  document.querySelector('#todos-container').appendChild(generateSummaryDOM(toDosLeft))

  newTodoList.forEach(function (toDo) {
    document.querySelector('#todos-container').appendChild(generateTodoDOM(toDo))
  })
}