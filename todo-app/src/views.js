import { getFilters } from './filters'
import { getTodos, removeTodo, saveTodos, toggleTodo } from './todos'

// renderTodos
// Arguments: none
// Return value: none
const renderTodos = () => {
  const toDoEl =  document.querySelector('#todos-container')
  const filters = getFilters()
  const toDos = getTodos()
  const newTodoList = toDos.filter((toDo) => {
  const searchTextMatch = toDo.text.toLowerCase().includes(filters.searchText.toLowerCase())
  const hideCompletedMatch = !filters.hideCompleted || !toDo.completed

    return searchTextMatch && hideCompletedMatch
  })

  const toDosLeft = newTodoList.filter((toDo) => !toDo.completed)

  toDoEl.innerHTML = ''
  toDoEl.appendChild(generateSummaryDOM(toDosLeft))

  if (newTodoList.length >= 1) {
    newTodoList.forEach((toDo) => {
      toDoEl.appendChild(generateTodoDOM(toDo))
    })
  } else {
    const emptyMessageEl = document.createElement('p')
    emptyMessageEl.classList.add('empty-message')
    emptyMessageEl.textContent = 'There are no to-dos to show'
    toDoEl.appendChild(emptyMessageEl)
  }
}

// generateTodoDOM
// Arguments: todo
// Return value: the todo element
const generateTodoDOM = (toDo) => {
  const toDoEl = document.createElement('label')
  const containerEl = document.createElement('div')
  const checkbox = document.createElement('input')
  const toDoShownText = document.createElement('span')
  const removeButton = document.createElement('button')

  // Setup todo checkbox
  checkbox.setAttribute('type', 'checkbox')
  checkbox.checked = toDo.completed
  containerEl.appendChild(checkbox)
  checkbox.addEventListener('change', () => {
    toggleTodo(toDo.id)
    saveTodos()
    renderTodos()
  })

  // Setup todo text
  toDoShownText.textContent = toDo.text
  containerEl.appendChild(toDoShownText)

  // Setup container
  toDoEl.classList.add('list-item')
  containerEl.classList.add('list-item__container')
  toDoEl.appendChild(containerEl)

  // Setup remove button
  removeButton.textContent = 'remove'
  removeButton.classList.add('button', 'button--text')
  toDoEl.appendChild(removeButton)
  removeButton.addEventListener('click', () => {
    removeTodo(toDo.id)
    saveTodos()
    renderTodos()
  })

  return toDoEl
}

// generateSummaryDOM
// Arguments: incompletedTodos
// Return value: the summary element
const generateSummaryDOM = (toDosLeft) => {
  const message = document.createElement('h2')
  if (toDosLeft.length === 1) {
    message.textContent = `You have 1 todo left`
  } else {
    message.textContent = `You have ${toDosLeft.length} todos left`
  }
  message.classList.add('list-title')
  return message
}


// Make sure to set up the exports
export { renderTodos }