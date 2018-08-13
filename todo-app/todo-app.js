const notes = [{
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

const ps = document.querySelectorAll('p')

ps.forEach(function (p) {
  if (p.textContent.toLowerCase().includes('the')) {
    p.remove()
  }
})