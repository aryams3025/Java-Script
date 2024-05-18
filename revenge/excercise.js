// function squareArray(array){
//     return array.map((object) => Math.pow(object,2))
// }

const { log } = require("console")

// let array = [1,2,3,4,5]
// console.log(squareArray(array));

// let new_array = array.map(square)
// function square(x){
//     return x * 2
// }

// console.log("new array is :",new_array)


//------------------------------------------------------------------------------------------------------------

// which numbers are addeed to get the target value

// let numbers = [2,4,6,8,9,7,15]



// function targetNumbers(array,target){
//     let pairs = []
//     for(let i = 0 ; i < array.length ; i++){
//         for(let j = i + 1 ; j < array.length ; j++ ){
//             if(array[i] + array[j] === target){
//                 pairs.push(array[i] , array[j])
//             }
//         }
//     }
//     return pairs
// }

// console.log(targetNumbers(numbers,21));


// print the prime numbers in between 1 to 50

// function primeNumbers(num){
//     if( num <= 1){
//         return false
//     }
//     for(let i = 2 ; i <= Math.sqrt(num) ; i++){
//         if( num % i == 0){
//             return false
//         }
//     }
// return true
// }

// for(let i = 2 ; i <= 50 ; i++){
//     if(primeNumbers(i)){
//         console.log(i);
//     }
// }


//--------------------------------------------------------------------------------------------------------

// let numbers = [1,2,3,4,5]

// function reverse(numbers){
//     return numbers.reverse()
//    }
// console.log(reverse(numbers));

//------------------------------------------------------------------------------------------------------------

// let numbers = [1,2,3,4,5]

// function reverseArray(numbers){
//     let reverse = []
//     for(let  i = numbers.length - 1; i >= 0 ; i-- ){
//         reverse.push(numbers[i])
//     }
//     return reverse
// }
// console.log(reverseArray(numbers));

//--------------------------------------------------------------------------------------------------------

// let numbers =[1,2,1,2,3,4,5]

// function duplicate(numbers){
//     let duplicate = []
//     for(let i = 0; i < numbers.length ; i++){
//         for(let j = i + 1 ; j < numbers.length ; j++){
//             if(numbers[i]=== numbers[j]){
//                 duplicate.push(numbers[i])
//             }
//         }
//     }
//     return duplicate
// }
// console.log(duplicate(numbers));

//-----------------------------------------------------------------------------------------------------------

// square the odd numbers and make the cube of the even numbers


// let numbers = [1,2,3,4,5,6]

// function print(numbers){
//     let odd_square = []
//     let even_cube = []

//     let even = numbers.filter(num => num %2 === 0)
//     let odd  = numbers.filter(num => num %2 !== 0)
//     let evenc = even_cube.push(even.map(num => num*num*num))
//     let odds = odd_square.push(odd.map(num => num*num))
//     return{odd_square,even_cube}
// }

// console.log(print(numbers));

//-------------------------------------------------------------------------------------------------

//second largest number

// let numbers = [1,2,3,4,5,6,7,8,9,10]

// function secondLargest(numbers){
//     let descending_order = numbers.sort((a,b)=> b - a)
//     return descending_order[1]
// }
// console.log(secondLargest(numbers));

//-------------------------------------------------------------------------------------------------------


// third largest number

// let numbers = [1,2,3,4,5,6,7,8,9,10]

// function thirdLargest(numbers){
//     let descending_order = numbers.sort((a,b)=> b - a)
//     return descending_order[2]
// }
// console.log(thirdLargest(numbers));

// square upto 1 to 100 prime numbers and the rest of normal

// function prime(numbers){
//     if (numbers <= 1){
//         return false 
//     }
//     for(let i = 2; i <= Math.sqrt(numbers) ; i++){
//         if(numbers % i === 0){
//             return false 
//         }
//     }
//     return true
// }
// let primenum = []
// for(let i =2; i <= 100 ; i++){
//     if(prime(i)){
//         primenum.push(i)
//     }

// }

// console.log(primenum);

// let rest_numbers =[]
// for(let i =101 ;i<=200 ;i++){
//     rest_numbers.push(i)
// }
// console.log(rest_numbers);

// let allnumbers= [...primenum,...rest_numbers]
// console.log(allnumbers);

//-----------------------------------------------------------------------------------------------


// let numbers = []
// for(let i = 1 ; i <= 10; i++){
//         if(i %2 === 0 ){
//             numbers.push("true")
//         }else {
//             numbers.push("false")
//         }
// }
// console.log(numbers);


//-----------------------------------------------------------------------------------------------------------------------------------------------------------


// even index cube and odd index square 

// 

//---------------------------------------------------------------------------------------------

// let numbers = [1,2,1,2,1,4,3,5,6,7,8]

// function countOccurrences(numbers) {
//     let counts = {};
//     for (let num of numbers) {
//         if (counts[num]) {
//             counts[num]++;
//         } else {
//             counts[num] = 1;
//         }
//     }
//     return counts;
// }

// console.log(countOccurrences(numbers));


//------------------------------------------------------------------------------------------------------------------------
//Write a function that takes an array of numbers and returns a promise that resolves with the sum of all numbers in the array.


// const promise1 = new Promise((res,rej)=>{
//     let numbers = [1,2,4,5,6,8,9]
    
//     let sum = numbers.reduce((acc,curr)=>acc+curr , 0)
//     res("the sum is "+ sum)
    
// }).then((response)=>{
//     console.log(response);
// }).catch((error)=>{
//     console.log(error);
// })

//---------------------------------------------------------------------------------------------------------------


// let a = [
//     {f1: 1, f2: 4},
//     {f1: 1, f2: 4},
//      45,
//      "sample",
//     {f1: 1, f2: 4}
// ];

// let sum = a.reduce((acc, curr) => {
//     if (typeof curr === 'object' ) {
//         acc += curr.f1;
//         //acc.count++;
//     }
//     return acc;
// }, 0);

// console.log(sum);

//------------------------------------------------------------------------------------------------------------------

//modify the sentence each will start with capital letters

// let sen = "hai hello how are you?"

// function capitalize(sentence){
//     return sentence.split(' ').map(word => {
//         return word.charAt(0).toUpperCase() + word.slice(1);
//     }).join(' ');

// }
// console.log(capitalize(sen));

//----------------------------------------------------------------------------------------------------------

// let array = []
// let number = 1 
// for(let i = 0 ; i <= 6 ; i++){
//     array.push(number)
//     number = number*10 + 1
// }
// console.log(array);

//------------------------------------------------------------------------------------------------------------

// let numbers = [ 1,-2,3,44,76,-42]

// function check(numbers){
//     let positive_numbers = numbers.filter(num => num > 0)
//     return positive_numbers.reduce((acc,curr) => acc + curr , 0)
// }

// console.log(check(numbers));

//------------------------------------------------------------------------------------------------------------

// let numbers = [2,3,4,5,6,7,8]

// function difference(numbers){
//     let max_number = Math.max(...numbers)
//     let min_number = Math.min(...numbers)

//     let difference = max_number - min_number
//     return difference
// }

// console.log(difference(numbers));


//--------------------------------------------------------------------------------------------------------------

let array1 = [1,2,3,4,5]
let array2 = [4,5,6,7,8]

function common(array1,array2){
    return array1.
}