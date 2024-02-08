/*names in the js are case sensitive

*/

// unshift

// let arr = ["sundaran","arya","vysakh","arun","rama"];
// console.log(arr.shift());
// console.log(arr.unshift("sun"));
// console.log(arr);



console.log(typeof null);


//object can be converted to array using object.values()

// const person = {
//     f_name : "Arya",
//     l_name : "MS",
//     age : 23,
//     place : "Kottayam"
// }

// console.log(person);
// const array= Object.values(person);
// console.log(array);

// let my_string = JSON.stringify(person);
// console.log(my_string);


//create a map

const person = new Map([
    ["arya",23],
    ["arun",28],
    ["anjali",24]
])

console.log(person);
 //adding new elements to the map using set()

 person.set("rama",49);
 person.set("vysakh",25);

 console.log(person);


 // function rest parameter

 function addArray(...numbers){
    let sum = 0;
    for(let n of numbers){
        sum += n;
    }
    return sum;
 }

 let number = addArray(2,1,3);
 console.log(number);


 let strings = ['3', '1', '5', '7', '2', '4', '6', '8'];

let customOrder = ['3', '2', '1', '4', '5', '6', '7', '8'];

strings.sort((a, b) => customOrder.indexOf(a) - customOrder.indexOf(b));

console.log(strings);
