const { log } = require("console");

const array = [1,2,3,4,5]

let result = array.reduce(function(acc,curr){
    return acc + curr
},0)

console.log(result);



let result2 = array.reduce(function(acc,curr) {
    return acc + curr
}, 0 )

console.log(result2);