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

// You have 2 toDos left (p element)
const toDosLeft = toDos.filter(function (toDo) {
  return !toDo.completed
})

const message = document.createElement('h2')
message.textContent = `You have ${toDosLeft.length} toDos left`
document.querySelector('body').appendChild(message)

// add a p for each todo above (use text value)
toDosLeft.forEach(function (toDo) {
  const toDoShown = document.createElement('h3')
  toDoShown.textContent = toDo.text
  document.querySelector('body').appendChild(toDoShown)
})