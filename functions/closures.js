const createCounter = () => {
  let count = 0

  return {
    increment() {
      count++
    },
    decrement() {
      count--
    },
    get() {
      return count
    }
  }
}

const counter = createCounter()
counter.increment()
counter.decrement()
counter.decrement()
console.log(counter.get())

// Adder
const createAdder = (a) => {
  return (b) => {
    return a + b
  }
}

const add10 = createAdder(10)
console.log(add10(-2))
console.log(add10(20))
const add100 = createAdder(100)
console.log(add100(-90))

// Tipper

const createTipper = (tipPercent) => {
  return (billTotal) => tipPercent * billTotal
}

const per15 = createTipper(.15)
const per20 = createTipper(.20)
const per25 = createTipper(.25)

console.log(per15(100))
console.log(per20(100))
console.log(per25(100))