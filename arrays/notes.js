 const notes = [{},{
  title: 'My next trip',
  body: 'I would like to go to Spain'
 },{
  title: 'Habits to work on',
  body: 'Exercise. Eating a bit better.'
 },{
  title: 'Office modification',
  body: 'Get a new seat'
 }
]

//  console.log(notes.pop())
//  notes.push('My new note')

//  console.log(notes.shift())
//  notes.unshift('My first note')

//  notes.splice(1, 1, 'This is the new second item')

// notes[2] = 'This is now the new note 3'

// notes.forEach(function (item, index) {
//   console.log(index)
//   console.log(item)
// })

 console.log(notes.length);
 console.log(notes)

 // Counting... 1
// for (let count = 0; count <= 2; count++) {
//   console.log(count)
// }

// for (let count = notes.length - 1; count >= 0; count) {
//   console.log(notes[count])
// }

const index = notes.findIndex(function (note, index) {
  console.log(note)
  return note.title === 'Habits to work on'
})

console.log(index);
