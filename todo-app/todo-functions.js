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

const generateTodoDOM = function (toDo) {
  const toDoShown = document.createElement('p')
  toDoShown.textContent = toDo.text
  return toDoShown
}

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