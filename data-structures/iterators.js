// const app = {
//   nextIndex: 0,
//   fruit: ['Apple', 'Banana', 'Strawberry', 'Orange', 'Mango'],
//   next() {
//     if (this.nextIndex >= this.fruit.length) {
//       return {
//         done: true,
//       }
//     }

//     const returnValue = {
//       value: this.fruit[this.nextIndex],
//       done: false,
//     }
//     this.nextIndex++

//     return returnValue
//   },
// }

// console.log(app.next())
// console.log(app.next())
// console.log(app.next())

// for (let index = 0; index < app.fruit.length; index++) {
//   console.log(app.next())
// }

const app = {
  fruit: ['Apple', 'Banana', 'Strawberry', 'Orange', 'Mango'],
  [Symbol.iterator]: function () {
    let nextIndex = 0
    return {
      next: () => {
        return nextIndex < this.fruit.length
          ? { value: this.fruit[nextIndex++], done: false }
          : { done: true }
      },
    }
  },
}

// const iterator = app[Symbol.iterator]()
// console.log(iterator.next().value)



for (const el of app) {
    console.log(el);
}