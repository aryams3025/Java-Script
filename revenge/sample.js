// prime number

const { log } = require("console")



// function isPrime(n){
//     if(n <= 1) return true
//     if(n <= 3) return true
//     for(let i = 2; i <= n ; i++){
//         if(n % i === 0 ) return false
//     }
//     return true
// }
// console.log(isPrime(34));


// function primeNonPrime(array){
//     let prime = []
//     let nonPrime = []
//     for(let i = 2 ; i <= array.length ; i++){
//         if(array[i] % i === 0){
//             nonPrime.push(array[i])
//         }else{
//             prime.push(array[i])
//         }
//     } 
// }
// let array = [1,2,3,4,5,6,7,8,9,10]
// console.log(primeNonPrime(array));

// function isPrime(n) {
//     if (n <= 1) return false;
//     if (n <= 3) return true;
//     if (n % 2 == 0 || n % 3 == 0) return false;
//     let i = 5;
//     while (i * i <= n) {
//         if (n % i == 0 || n % (i + 2) == 0) return false;
//         i = i + 6;
//     }
//     return true;
// }

// function primeNonPrime(array) {
//     let prime = [];
//     let nonPrime = [];
//     for (let i = 0; i < array.length; i++) {
//         if (isPrime(array[i])) {
//             prime.push(array[i]);
//         } else {
//             nonPrime.push(array[i]);
//         }
//     }
//     return { prime, nonPrime };
// }

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// console.log(primeNonPrime(array));


// palindrome using function

// function isPalindrome(string){
//     let reverseString = string.split('').reverse().join('')
//     return string === reverseString 
// }
// let string  = "malayalam"
// console.log(isPalindrome(string));

// palindrome withou built in functions

// function palindrome(string){
//     let reverse = ""
//     for(let i = string.length - 1 ; i >= 0 ;  i--){
//         reverse = reverse + string[i]
//     }
//     if(string === reverse){
//         console.log(`${string} is palindrome`);
//         return true
//     }else{
//         console.log(`${string} is not palindrome`);
//         return false
//     }
// }

// let word1 = "arya"
// let word2 = "abba"
// console.log(palindrome(word1));
// console.log(palindrome(word2));

// sorting an array using built in function

// function sortNumbers(array){
//     let ascending = array.slice().sort((a,b) => a - b)
//     let descending = array.slice().sort((a,b) => b - a)
//     return {ascending , descending}
// }
// let number = [3,2,14,5]
// console.log(sortNumbers(number));



// function maxNumber(array){
//     let max = array[0]
//     for(let i = 0 ; i < array.length  ; i++){
//         if( array[i] > max){
//             max = array[i]
//         }
//     }
//     return max
// }
// let array = [1,2,3,4,5,6]
// console.log(maxNumber(array));


// sort an array without built in functions

// function sortNumbers(array){
//     for(let i = 0 ; i <array.length ; i++){
//         for(let j = 0 ; j < array.length - i - 1 ; j ++){
//             if(array[j] > array[j + 1]){
//                 let temp = array[j]
//                 array[j] = array[j+1]
//                 array[j+1] = temp
//             }
//         }
//     }
//     return array
// }
// let array = [2,1,4,3,5]
// console.log(sortNumbers(array));

//

//longest string an array

// function longestString(array){
//     let longestString = ""

//     for(let i = 0 ; i < array.length; i++){
//         if(typeof array[i] =="string" && array[i].length > longestString.length){
//             longestString = array[i]
            
//         }
//     }
//     return longestString
// }

// const string = ["apple", "banana" , "orange" , "kiwi"]
// console.log(longestString(string));


//call, apply and  bind

// const object1 = {
//     name : "Arya",
//     getName(){
//         console.log(this.name)
//     }
// }
// const object2 = {
//     name : "vysakh"
// }
// object1.getName.call(object2)

let sample = [{a:2,b:4},{c:2,d:8},{e:4,f:9}]
// function sumOfNestedObject(sample){
//     let value = sample.reduce((acc,curr)=>{
//         for(let i in curr){
//             acc = acc + curr[i]
//         }
//         return acc
//     },0
//     )
//     return value
// }
// console.log(sumOfNestedObject(sample));

// function sumOfObject(sample){
//     let value = sample.reduce((acc,curr)=>{
//         let values= Object.values(curr)
//         for(let i= 0 ; i < values.length ; i++){
//             acc = acc + values[i]
//         }
//         return acc
//     },0)
//     return value
// }
// console.log(sumOfObject(sample));


//flattening an nested Object
// function flattenedArray(sample){
//     let flattenedArray =  sample.reduce((acc,curr)=>{
//         return acc.concat(Object.values(curr))
//     },[])
//     return flattenedArray
// }
// console.log(flattenedArray(sample));



// object.values have another function to convert the object to array

// let flatten  = sample.map(obj=> Object.values(obj))
// console.log(flatten);

// let singleArray = flatten.flat(Infinity)
// console.log(singleArray);

// let sum  = singleArray.reduce((acc,curr) =>{
//     acc + curr ,curr
// },0)
// console.log(sum);

// function flatten(array){
//     let nestedArrya = array.map(obj => Object.values(obj)).flat(Infinity)
//     console.log(nestedArrya);
//     return nestedArrya.reduce((acc,curr) => acc + curr )

// }

// let sample12 = [{a:2,b:4},{c:2,d:8},{e:4,f:9} ]
// console.log(flatten(sample12));

// const a = [{a:23,b:[1,4,8]}]
// function sample123(a){
//     const flatten = a.map(obj => Object.values(obj)).flat(Infinity)
//     console.log(flatten);

//     return flatten.reduce((acc,curr)=>acc + curr,0)
// }
// console.log(sample123(a));



// const b = [{adf:[{adf:[4,34,34],adf:5}]}]

// function sample4(sample){
//     let flattenArray = sample.map(obj => Object.values(obj)).flat(Infinity)
//     console.log(flattenArray);
// }
// console.log(sample4(b));

// const b = [{adf:[{adf:[4,34,34],adf:5}]}];

// function flattenArray(arr) {
//     return arr.flatMap(obj => Object.values(obj)).flat(Infinity);
// }

// console.log(flattenArray(b));

// const b = [{adf:[{adf:[4,34,34],adf:5}]}];

// function extractNumbers(arr) {
//     let result = [];
//     arr.forEach(item => {
//         if (typeof item === 'number') {
//             result.push(item);
//         } else if (Array.isArray(item)) {
//             result.push(...extractNumbers(item));
//         } else if (typeof item === 'object') {
//             result.push(...extractNumbers(Object.values(item)));
//         }
//     });
//     return result;
// }

// console.log(extractNumbers(b)); 



// const abc = [{f:34,l:4},{f:34,l:4},{f:34,l:4},{f:34,l:4},{f:34,l:4}]

// function flatten(s){
//     let flattenArray = s.map(obj => Object.values(obj))
//     console.log(flattenArray);
//     let valueArray = flattenArray.flat(Infinity)
//     console.log(valueArray);
//     return valueArray.reduce((acc,curr)=> acc + curr , 0)
// }
// console.log(flatten(abc));


// const array = ["arya",1,2,"anu",3,4,5,"vysakh","aswin","arun"]
// function divide(array){
//     let number_list = []
//     let words_list = []
    
//     for(let i = 0 ; i < array .length ; i++){
//         if(isNaN(array[i])){
//             words_list.push(array[i])
//         }else{
//             number_list.push(array[i])
//         }
//     }
//     return {number_list,words_list}

// }
// console.log(divide(array));



// prime number

// const http = require('http')
// const port = 2000

// const server  = http.createServer((req,res)=>{
//     res.end("hai");
// })
// server.listen(port,()=>{
//     console.log(`http://localhost:${port}`);
// })

// const express = require('express')
// const app = express()
// const port = 2000

// app.get('/',(req,res,next)=>{
//     res.send("hai")
//     next()
// })

// app.get('/home',(req,res,next)=>{
//     res.send("hello")
// })

// app.listen(port,()=>{
//     console.log(`http://localhost:${port}`);
// })


function add(a, b) {
    return a + b;
}
  
  // Calling the add function multiple times
for (let i = 0; i < 1000000; i++) {
    add(i, i + 1);
}
  