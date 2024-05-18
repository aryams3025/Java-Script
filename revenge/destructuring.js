
const state = { name : "arya" , age : 22 , revengeTo : "niyas"}

console.log("Before Destructuring");

console.log(state.name)
console.log(state.age)
console.log(state.revengeTo)

const {name,age,revengeTo}  = state

console.log("After Destructuring");

console.log(name)
console.log(age)
console.log(revengeTo)
