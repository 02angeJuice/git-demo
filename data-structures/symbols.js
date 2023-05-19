const sym = Symbol()
const s1 = Symbol('bobo')
const s2 = Symbol('tuta')

console.log(sym, s1, s2)
console.log(typeof sym)

console.log(sym.description)
console.log(s1.description)

console.log(Symbol('sym') === Symbol('sym'))

const user = {
    [Symbol('id')]: 1,
    name: 'bobo',
    email: 'bobo@email.com',
  }


user.id = 2

console.log(user[Symbol('id')]) // undefined

// Symbols are NOT enumerable

// console.log(Object.keys(user))
// console.log(Object.values(user))


for (const key in user) {
  console.log(key)
}

// getOwnPropertySymbols
console.log(Object.getOwnPropertySymbols(user));

// Symbol.for()
const s3 = Symbol.for('bobo')
const s4 = Symbol.for('bobo')

console.log(s3 === s4);

console.log(Symbol.keyFor(s3));
console.log(Symbol.keyFor(s1));


console.log(s1.toString());
console.log(s3.toString());
console.log(sym.toString());


console.log(s1.valueOf());
console.log(s3.valueOf());
console.log(sym.valueOf());