import uuidv4 from 'uuid/v4'

let toDos = []

// Fetch existing todos from lo
const loadTodos = () => {
  const todoJSON = localStorage.getItem('toDos')

  try {
    toDos = todoJSON ? JSON.parse(todoJSON) : []
  } catch (e) {
    toDos = []
  }
}

// Save todos to localstorage
const saveTodos = () => {
  localStorage.setItem('toDos', JSON.stringify(toDos))
}

const getTodos = () => toDos

const createTodo = (text) => {
  // if (text.length > 0) {
    toDos.push({
      id: uuidv4(),
      text,
      completed: false
    })
  // }
  saveTodos(toDos)
}

const removeTodo = (id) => {
  const toDoIndex = toDos.findIndex((toDo) => toDo.id === id)

  if (toDoIndex > -1) {
    toDos.splice(toDoIndex, 1)
    saveTodos()
  }
}

const toggleTodo = (id) => {
  const toDo = toDos.find((toDo) => toDo.id === id)

  if (toDo) {
    toDo.completed = !toDo.completed
    saveTodos()
  }
}

// Make sure to call loadTodos and setup the exports
loadTodos()

export { loadTodos, getTodos, createTodo, removeTodo, toggleTodo }