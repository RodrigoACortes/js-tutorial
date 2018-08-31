// const myAge = 1
// const message = myAge >= 18 ? 'You can vote!' : 'You cannot vote.'
// console.log(message)

const myAge = 22
const showPage = () => {
  return 'Showing the page!'
}
const showErrorPage = () =>{
  return 'Showing the error page'
}

const message = myAge >= 21 ? showPage() : showErrorPage()
console.log(message)

const team = ['Tyler', 'Porter']
const messageTeam = team.length <= 4 ? `Team size: ${team.length}` : 'Too many people on your team'
console.log(messageTeam)