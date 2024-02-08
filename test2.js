// function evenSum(arr){
//     let positivenumbers = arr.filter(num => num > 0);
//     let evnarray = positivenumbers.filter(num => num %2 === 0);
//     let evenarraySum = evnarray.reduce((acc,curr)=>(acc+curr , curr) ,0);
//     return evenarraySum;
// }

// const array = [-2,3,-7,4,-8,-9,10];
// console.log(evenSum(array));


// function notNumber(array){
//     let number = array.filter(elem => !isNaN(elem))
//     return number
// }

// const arr = ["arya",123,78];
// console.log(notNumber(arr));



// const p = new Promise((res,rej)=>{
//     setTimeout(()=>{
        
//         let array = [1,2,4,5];
//         if(array.length > 0 ){
//             res (Math.max.apply(null,array)) ;
//         }
//         else{
//             rej ("fail")
//         }
//     },1000)
// })

// p.then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err);

// })



// const obj1 = {
//     name : "arya",
//     age : 23
// }

// const obj2 = {
//     name : "vysakh",
//     age : 25
// }

// let array1 = Object.values(obj1)  // object converted to array using Object.values()
// let array2 = Object.values(obj2)

// let arr = [...array1,...array2]; // concatenate 2 arrays 
// console.log(arr);

// let Age = arr.filter(elem => !isNaN(elem)); //find the number
// console.log(Age);

// let maxAge = Age.reduce((acc,curr)=>acc>curr ? acc : curr); // find the max age
// console.log(maxAge);


// function UniqueElements(array){
//     return [...new Set(array)]
// }

// const arr = [1,2,1,3,4,6,2,2,56,3,4];
// console.log(UniqueElements(arr));


// let unique = arr.filter((value,index,arr) =>arr.indexOf(value)===index)
// console.log(unique);


// words length greater than 5

// function words(array){
    
//     let greaterThan5 = array.filter(num => num.length >5);
//     return greaterThan5;
// }

// const arr = ["Arya" ,"Arunima" ,"Athira" , "Hai"]
// console.log(words(arr));


// function* evenNumbers(){
//     let i = 0 ;
//     while(true){
//         i +=2;
//         yield i;
//     }
// }
// const iterator = evenNumbers();
// for(let i = 0 ; i <=4; i++){
//     console.log(iterator.next().value);
// }


// const names = ["arya","athira","tessa"];
// for(let i of names){
//     console.log("Miss "+ i);
// }

// const array = [1,2,3,4,5];

// var sum = 0;
// array.forEach(function(num){
//    sum += num;
// })
// console.log(sum);
//reference error

// console.log(x);
// const x=5;

// function upperCase(string){
//     return string.toUpperCase();
// }

// const str = "arya";
// console.log(upperCase(str));

// function palindrome(str){
//     let reverseString = str.split('').reverse().join('');
//     return str === reverseString;
// }

// const stri1 = "level";

// const stri2 = "athira";
// console.log(palindrome(stri1));
// console.log(palindrome(stri2));

// function firstLetter(sentence){
//     let words = sentence.split(' ');
//     let first = words.map(n =>n.charAt(0).toUpperCase()+n. slice(1)).join(' ');
//     return first; 
// }

// const sen = "arya how are you?";
// console.log(firstLetter(sen));



// function capitalizeFirstAndLast(sentence) {
//     let words = sentence.split(' ');
//     let modifiedSentence = words.map(word => {
//         let first = word.charAt(0).toUpperCase();
//         let last = word.slice(-1).toUpperCase();
//         let middle = word.slice(1, -1);
//         return first + middle + last;
//     });
//     let result = modifiedSentence.join(' ');
//     return result;
// }

// const sentence = "arya how are you?";
// console.log(capitalizeFirstAndLast(sentence));



// function factorial(num){
  
//     let fact = 1;
//     for(let i =2; i <=num ; i++){
//         fact = fact * i;
        
//     }
//     return fact;
// }
// console.log(factorial(3));


// function prime(number){
//     if(number <= 1){
//         return false;
//     }
//     for(let i = 2; i <= Math.sqrt(number); i++){
//         if(number % i == o){
//             return false;
//         }
//       }
//     return true;
// }
// console.log(prime(7));
// console.log(prime(12));

// function isPrime(number) {
//     if (number <= 1) {
//         return false;
//     }

//     for (let i = 2; i <= Math.sqrt(number); i++) {
//         if (number % i === 0) {
//             return false;
//         }
//     }

//     return true;
// }

// // Example usage
// console.log(isPrime(7));  // Output: true
// console.log(isPrime(12)); // Output: false


// repeat elements in an array

// const array = [1,2,3,2,3,4,5];
// for(let i = 0 ; i < array.length-1 ; i++){
//     for(let j = 1; j < array.length ; i++){
//         if(array[i]===array[j]){
//             console.log(array[i]);
//         }
//     }
// }

// the above code is wrong

// function repeatedElement(array){
//     return array.filter((elm , ind ,arr)=> arr.indexOf(elm)!== ind)
//     // return array.filter((elem , index ,ar)=> ar.indexOf(elem)=== index)   unique elements
// }

// const array1 = [1,2,1,2,3,4,3,5,6,4,7,6,8];
// console.log(repeatedElement(array1));

// let obj = {
//     name : "arya",
//     age : 23
// }

// let nested_array = Object.entries(obj);
// console.log(nested_array);




//remove vowels

// function removeVowels(string){
//     const word = string.replace(/[aeiou]/gi,'');
//     return word;
// }

// const str = "Arya how are you";
// console.log(removeVowels(str));




// const express = require('express');

// const app = express();
// const port = 3003;

// let array = [1,2,3,4,5];
// let new_array = array.map(num => num * 2);
// console.log(new_array);

// app.get((req,res)=>{
// res.send("hello this is my square number array",new_array)
// })


// app.listen(port,()=>{
//     console.log(`server running on port https://localhost:${port}`);
// })


//break statement

// let text = "";
// for(let i = 0; i < 5 ; i++){
//     if(i === 3) break;;
//         text += i
// }
// console.log(text);     //012



// continue statement

// let text = "";
// for(let i = 0; i < 5 ; i++){
//     if(i === 3) continue;;
//         text += i
// }
// console.log(text);   //0124

// class Car{
//     constructor(brand){
//         this.carname = brand ;
//     }
// }

// const myCar = new Car("Ford")
// console.log(myCar.carname);



// let text = " ";
// let i = 0;
// do{
//  text += i + "\n";
//  i++;
// }while(i < 5)

// console.log(text);


// let read = require('readline-sync');
// let day = parseInt(read.question("Enter the day in number : "))

// switch(day){
//     case 1:
//         console.log("monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     default:
//         console.log("Invalid");        
// }

// function dividedBy3(num){
//     switch(num % 3){
//         case 0 :
//             console.log("divisible by 3");
//             break;
//         case 1:
//             console.log("not divisible by 3");
//             break;
//         default:
//             console.log("invalid");    
//             break;    
//     }
// }

// const number = 4;
// dividedBy3(number);


//while
// let text = ""
// let i = 0; 
// while(i < 5){
//     text += 1;
//     i++
// }




// let text = "";
// let i = 0;
// while (i < 5) {
//   text += i + "\t";
//   i++;
// }
// console.log(text);


// function reverseArray(array){
//   // let reverse_array = [];
//   for(let i = array.length - 1; i>=0 ; i-- ){
//       //  reverse_array.push(array[i]);
//       console.log(array[i]);
//   }
//   // return reverse_array;
// }

// const arr = [1,2,3,4,5];
// reverseArray(arr);


// function Repeted(array){
//   // return array.filter((elem,index,arr)=> arr.indexOf(elem)!==index)
//   let sorted_array = array.sort();

// }

// const array1 = [4,1,2,1,2];
// console.log(Repeted(array1));


//0,1,0,3,12 


// const numbers = [0,1,0,3,12];

// const zeros = numbers.filter(num => num===0);
// const non_zero = numbers.filter(num => num >0);

// const concatenated_array = [...non_zero,...zeros];
// console.log(concatenated_array);






// function averageArray(array){
//   let sum = array.reduce((acc,curr)=>(acc+curr,curr),0)

//   let median = sum / array.length + 1;
//   return median ;
// }

// const array2 = [1,2,3];

// console.log(medianArray(array2));



// function medianArray(arr1,arr2){
//   let merged_arr = [...arr1,...arr2].sort((a,b)=>a-b);
//   let len = merged_arr.length;

//   let mid = Math.floor(len/2);


//   if(len % 2 === 0){
//     return (merged_arr[mid-1] + merged_arr[mid])/2;
//   }else{
//     return merged_arr[mid];
//   }
// }

// const array2 = [1,2,3];
// const array3 =[4,5,6];
// console.log(medianArray(array2,array3));
