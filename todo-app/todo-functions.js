const getSavedTodos = () => {
  const todoJSON = localStorage.getItem('toDos')

  try {
    return todoJSON ? JSON.parse(todoJSON) : []
  } catch (e) {
    return []
  }
}

const saveTodos = (toDos) => {
  localStorage.setItem('toDos', JSON.stringify(toDos))
}

// Removes a todo
const removeTodo = (id) => {
  const toDoIndex = toDos.findIndex((toDo) => toDo.id === id)

  if (toDoIndex > -1) {
    toDos.splice(toDoIndex, 1)
  }
}

// Toggle the completed value for a given todo
const toggleTodo = (id) => {
  const toDo = toDos.find((toDo) => toDo.id === id)

  if (toDo) {
    toDo.completed = !toDo.completed
  }
}

// Get DOM elements for an individual note
const generateTodoDOM = (toDo) => {
  const toDoDiv = document.createElement('div')
  const checkbox = document.createElement('input')
  const toDoShownText = document.createElement('span')
  const removeButton = document.createElement('button')

  // Setup todo checkbox
  checkbox.setAttribute('type', 'checkbox')
  checkbox.checked = toDo.completed
  toDoDiv.appendChild(checkbox)
  checkbox.addEventListener('change', () => {
    toggleTodo(toDo.id)
    saveTodos(toDos)
    renderTodos(toDos, filters)
  })

  // Setup todo text
  toDoShownText.textContent = toDo.text
  toDoDiv.appendChild(toDoShownText)

  // Setup remove button
  removeButton.textContent = 'x'
  toDoDiv.appendChild(removeButton)
  removeButton.addEventListener('click', () => {
    removeTodo(toDo.id)
    saveTodos(toDos)
    renderTodos(toDos, filters)
  })

  return toDoDiv
}

// Get the DOM elements for summary
const generateSummaryDOM = (toDosLeft) => {
  const message = document.createElement('h2')
  message.textContent = `You have ${toDosLeft.length} toDos left`
  return message
}

const renderTodos = (toDos, filters) => {
  const newTodoList = toDos.filter((toDo) => {
    const searchTextMatch = toDo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    const hideCompletedMatch = !filters.hideCompleted || !toDo.completed

    return searchTextMatch && hideCompletedMatch
  })

  document.querySelector('#todos-container').innerHTML = ''

  const toDosLeft = newTodoList.filter((toDo) => !toDo.completed)

  document.querySelector('#todos-container').appendChild(generateSummaryDOM(toDosLeft))

  newTodoList.forEach((toDo) => {
    document.querySelector('#todos-container').appendChild(generateTodoDOM(toDo))
  })
}