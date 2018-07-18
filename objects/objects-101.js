let myBook = {
  title: '1984',
  author: 'George Orwell',
  pageCount: 326
}

console.log(`${myBook.title} by ${myBook.author}`);

myBook.title = 'Animal Farm'

console.log(`${myBook.title} by ${myBook.author}`);

// Challenge area
// name, age, location

let person = {
  name: 'Anyone',
  age: 25,
  location: 'Earth'
}

console.log(`${person.name} is ${person.age} and lives on ${person.location}.`);

person.age = person.age + 1

console.log(`${person.name} is ${person.age} and lives on ${person.location}.`);
