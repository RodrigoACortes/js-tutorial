// const toDos = ['a', 'Buy Food', 'c', 'd', 'e']

// delete 3rd item
//  toDos.splice(2, 1)

//add a new item to the end
// toDos.push('f')

// remove first item from the list
// toDos.shift();

// console.log(`You have ${toDos.length} todos.`);

// toDos.forEach(function (item, index) {
//   num = index + 1
//   console.log(`${num}. ${item}`);
// })

// for (count = 0; count < toDos.length; count++ ) {
//   const num = count + 1
//   const toDo = toDos[count]
//   console.log(`${num}. ${toDo}`)
// }

// 1. Convert array to array of objects -> text, completed
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
// 2. Create function to remove a todo by text value
const deleteTodo = (toDos, toDoText) => {
  const index = toDos.findIndex(( toDo => {
    return toDo.text.toLowerCase() === toDoText.toLowerCase()
  }))

  if (index > -1) {
    toDos.splice(index, 1)
  }
}

const getThingsToDo = (toDos) => {
  return toDos.filter((toDo) => {
    return toDo.completed === false
  })
}

const sortToDos = toDos => {
  toDos.sort( (a, b) => {
    if (a.completed < b.completed) {
      return -1
    } else if (b.completed < a.completed) {
      return 1
    } else {
      return 0
    }
  })
}

// console.log(getThingsToDo(toDos))

// console.log(deleteTodo(toDos, 'shop'))
// console.log('-------------------')
// console.log(toDos)

sortToDos(toDos)
console.log(toDos);