const toDos = ['a', 'Buy Food', 'c', 'd', 'e']

// delete 3rd item
 toDos.splice(2, 1)

//add a new item to the end
toDos.push('f')

// remove first item from the list
toDos.shift();

console.log(`You have ${toDos.length} todos.`);

toDos.forEach(function (item, index) {
  num = index + 1
  console.log(`${num}. ${item}`);
})

// for (count = 0; count < toDos.length; count++ ) {
//   const num = count + 1
//   const toDo = toDos[count]
//   console.log(`${num}. ${toDo}`)
// }

// 1. Convert array to array of objects -> text, completed
// 2. Create function to remove a todo by text value

deleteTodo(toDos, 'buy food')
console.log(toDos)