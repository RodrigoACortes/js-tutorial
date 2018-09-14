import uuidv4 from 'uuid/v4'

// Setup the empty todos array
let toDos = []

// loadTodos
// Arguments: none
// Return value: none
const loadTodos = () => {
  const todoJSON = localStorage.getItem('toDos')

  try {
    return todoJSON ? JSON.parse(todoJSON) : []
  } catch (e) {
    return []
  }
}

// saveTodos
// Arguments: none
// Return value: none
const saveTodos = () => {
  localStorage.setItem('toDos', JSON.stringify(toDos))
}

// getTodos
// Arguments: none
// Return value: todos array
const getTodos = () => toDos

// createTodo
// Arguments: todo text
// Return value: none
const createTodo = (text) => {
  if (text.length > 0) {
    toDos.push({
      id: uuidv4(),
      text,
      completed: false
    })
  }
  saveTodos(toDos)
}

// removeTodo
// Arguments: id of todo to remove
// Return value: none
const removeTodo = (id) => {
  const toDoIndex = toDos.findIndex((toDo) => toDo.id === id)

  if (toDoIndex > -1) {
    toDos.splice(toDoIndex, 1)
    saveTodos(toDos)
  }
}

// toggleTodo
// Arguments: id of todo to toggle
// Return value: none
const toggleTodo = (id) => {
  const toDo = toDos.find((toDo) => toDo.id === id)

  if (toDo) {
    toDo.completed = !toDo.completed
  }
}

// Make sure to call loadTodos and setup the exports
toDos = loadTodos()

export { loadTodos, saveTodos, getTodos, createTodo, removeTodo, toggleTodo }