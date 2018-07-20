let myAccount = {
  name: 'My Name',
  expenses: 0,
  income: 0
}

let addExpense = (account, amount) => {
  account.expenses = account.expenses + amount
}

// addIncome
let addIncome = (account, amount) => {
  account.income = account.income + amount
}

// resetAccount
let resetAccount = (account) => {
  account.income = 0
  account.expenses = 0
}

// getAccountSummary
// Account for Andrew has $900.  $1000 in income. $100 in expenses
let accountSummary = (account) => {
  let name = account.name
  let income = account.income
  let expenses = account.expenses
  let amountInAccount = account.income - account.expenses
  return `Account for ${name} has $${amountInAccount}.  $${income} in income. $${expenses} in expenses`
}

// addIn
addIncome(myAccount, 1000)
// addE
addExpense(myAccount, 25)
// addE
addExpense(myAccount, 25)
// addE
addExpense(myAccount, 50)
// summary
console.log(accountSummary(myAccount))
// reset
resetAccount(myAccount)
// summary
console.log(accountSummary(myAccount))