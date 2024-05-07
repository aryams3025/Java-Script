// 1) finding even sum when the array contains positive and negative numbers

// function evenSum(number){
//     let positive_numbers = number.filter(num => num > 0)
//     let even = positive_numbers.filter(nums => nums % 2 == 0)
//     let even_sum = even.reduce((acc,curr) => acc + curr , 0)
//     return even_sum
// }
// const number = [-1, 2,-4,-3,6,9,8]
// console.log(evenSum(number));

//---------------------------------------------------------------------------------

// 2) find the array contains not a number item 

// function find_not_a_number(number){
//     return number.filter(num => isNaN(num))
// }
// const number = ["array",1,2,3,"arya","vysakh"]
// console.log(find_not_a_number(number));

//-----------------------------------------------------------------------------

// 3) find the unique numbers in the given array 

// function find_unique_numbers(numbers){
//     return [...new Set (numbers)]
// }
// const numbers =[1,1,2,3,4,2,5,6]
// console.log(find_unique_numbers(numbers));

//-----------------------------------------------------------------------

// 4) generator function to print even numbers infinitely

// function* evenNumbers(){
//     let i = 0
//     while(true){
//         i = i + 2;
//         yield i;
//     }
// }
// const iterator = evenNumbers()
// for(let i = 0 ; i <= 10; i++){
//     console.log(iterator.next().value);
// }

//-----------------------------------------------------------------------------

// 5) add miss to the front of an each item 

// function addMiss(names){
//     for(let i of names){
//         console.log("Miss " + i);
//     }
// }
// const names =["arya","athira"]
// addMiss(names);

//-------------------------------------------------------------------------------

// 6) sum of numbers using forEach

// const array = [1,2,3,4,5]

// var sum = 0
// array.forEach(function(n){
//     sum = sum + n
// })
// console.log(sum);

//----------------------------------------------------------------------------------

// 7) check if the string is palindrome or not 
// function palindrome(string){
//     let reverse = string.split('').reverse().join("")
//     return reverse === string
// }
// const string = "malayalam"
// console.log(palindrome(string));

// method 2--------------------------------------------------------

// function isPalindrome(str) {
//     return str === str.split('').reverse().join('');
// }

// const strings = ["heart", "tea", "malayalam"];

// for (let str of strings) {
//     console.log(str + ": " + isPalindrome(str));
// }

// method 3 -------------------------------------------------------------

// function reverse(string){
//     return string === string.split('').reverse().join('')
// }
// const string_array = ["arya","vysakh","malayalam",'aa',"ababc"]
// const result = []

// for(let x of string_array){
//     result.push(palindrome(x))
// }
// console.log(result);

//------------------------------------------------------------------------------

// 8) to upperCase the first letter of the sentence

// function capitalise(sentence){
//     let words = sentence.split(" ")
//     let first = words.map( n => n.charAt(0).toUpperCase() + n.slice(1)).join(" ")
    
//     return first
// }
// const sentence = "Arya how are you ?"
// console.log(capitalise(sentence));

//------------------------------------------------------------------------

// 9) capitalise first and last letters

// function capitalise(sen){
//     let words = sen.split(" ")
//     let modifiedSentence = words.map(word =>{
     
//         let first = word.charAt(0).toUpperCase();
//         let middile = word.slice(1, -1)
//         let last = word.slice(-1).toUpperCase()
//         return first + middile + last
//     })
//     return modifiedSentence
// }
// const sentence = "Are you happy?"
// console.log(capitalise(sentence));

//-----------------------------------------------------------------------------------

// 10) fatorial of a number

// function factorial(number){
//     let fact = 1 
//     for(let i = 2; i <= number ; i++){
//         fact = fact * i
//     }
//     return fact
// }

// console.log(factorial(4));

//---------------------------------------------------------------------------------

// 11) find out repeated elements 

// function repeatedElements(number){
//     return number.filter((elem, index, num) => num.indexOf(elem)!== index)
// }
// const numbers = [1,2,1,3,4,5,1,2,3,5,6,7,8,9]
// console.log(repeatedElements(numbers));

//---------------------------------------------------------------------------

// 12) give object changed to nested array using object.entries

// let obj = {
//     name : "arya",
//     age : 23
// }

// let nested_array = Object.entries(obj);
// console.log(nested_array);

//--------------------------------------------------------------------------

// 13) remove vowels in the sentence or a given string

// function removeVowels(string){
//     let word = string.replace(/[aeiou]/gi,'')
//    return word
// }

// const sentence = "hai how are you "
// console.log(removeVowels(sentence));

//---------------------------------------------------------------------------------------

// 14) nullish, IIFE, Shift , Unshift

//nullish

// const name = null;
// const username = name ?? "Arya"
// console.log(username);

// IIFE

// (function display(){
//     console.log("My name is arya");
// })();

//shift remove the first element of an array and print the reove element

// const numbers = [1,2,3,4,5,6];
// console.log(numbers.shift());

//unshift  remove the last element and print that element

// const numbers = [1,2,3,4,5,6];
// console.log(numbers.unshift());

//-----------------------------------------------------------------------------------


// 15) second largest element 

// function secondLargest(array){
//     let secondLargestElement =[... new Set(array)].sort((a,b) => b -a )
//     return secondLargestElement[1]
// }
// const array = [1,2,3,4,5,6,9]
// console.log(secondLargest(array));

//-----------------------------------------------------------------------------------

// 16) function to find the average of an array


//function averageOfArray(num){
//   let sum = num.reduce((acc,curr) => acc + curr , 0)
//     let average = sum/num.length
//     return average
// }

// const array = [ 1,2,3,45,4,5]
// console.log(averageOfArray(array));

//----------------------------------------------------------------------------------

// 17) common element in the two array 

// function commonElements(arr1,arr2){
//     return arr1.filter(num => arr2.includes(num))
// }

// const array1 = [1,2,3,4,5]
// const array2 = [1,2,9,8,7]
// console.log(commonElements(array1,array2));

//--------------------------------------------------------------------------------

// 18) count even numbers 

// function negativeNumbers(numbers){
//     return numbers.filter(num => num < 0).length
// }
// const numbers  = [1,2,4,-33, -56,-4,2,9]
// console.log(negativeNumbers(numbers));

//----------------------------------------------------------------------------------

// 19) count even numbers

// function evenNumberCount(number){
//     return number.filter(num => num % 2 == 0).length
// }

// const array = [1,2,3,4,5,6,7,8,9,10]
// console.log(evenNumberCount(array));

//--------------------------------------------------------------------------------

// 20) find the maximum and minimum number of an array

// function maxAndMin(num){
//     const max = Math.max(...num)
//     const min = Math.min(...num)
//     return{max,min}
// }

// const array = [1,2,34,5,23,51,94]
// console.log(maxAndMin(array));

//-----------------------------------------------------------------------------------

// 21) Filter Positive Numbers:

// function positiveNumbers(num){
//     return num.filter(number => number > 0)
// }
// const array = [2, -5, 8, -3, 0, 10]
// console.log(positiveNumbers(array));

//-----------------------------------------------------------------------------------

// 22)Find Maximum Value:

// function maxValue(number){
//     if(number === 0 ){
//         return 0
//     }
//     let maxNumber = number[0]
//     for(let i = 0 ; i < number.length ; i++){
//         if(number[i] > maxNumber){
//             maxNumber = number[i]
//         }
//     }
//     return maxNumber
// }

// const array = [17, 5, 23, 9, 12]
// console.log(maxValue(array));

//-----------------------------------------------------------------------

// 23) Remove duplicates

// function uniqueNumber(numbers){
//     return [... new Set(numbers)]
// }
// const array = [1, 2, 3, 2, 4, 1, 5]
// console.log(uniqueNumber(array));

//-------------------------------------------------------------------------

// 24) Sum of Array

// function sum(numbers){
//     let sum = 0
//     for(let x of numbers){
//         sum = sum + x
//     }
//     return sum
// }
// const array = [4, 8, 2, 5, 3]
// console.log(sum(array));

// function sum(num){
//     return num.reduce((acc,curr) => acc + curr , 0)
// }
// const array = [4, 8, 2, 5, 3]
// console.log(sum(array));

//--------------------------------------------------------------------------------

// 25) Average of array

// function average(numbers){
//     let sum = numbers.reduce((acc,curr) => acc + curr , 0)
//     return sum/numbers.length
// }
// const array = [10, 20, 30, 40, 50]
// console.log(average(array));

//-----------------------------------------------------------------------------------

// 26) reverse of an array

// function revers(numbers){
//     let reverse = []
//     for(let i = numbers.length-1 ; i >=0 ; i--){
//         reverse.push(numbers[i])
//     }
//     return reverse
// }
// const array = [10, 20, 30, 40, 50]
// console.log(revers(array));


//--------------------------------------------------------------------------

// 27) find index of an array

//---------------------------------------------------------------------------------

// 28) merge arrays

// function mergearray(array1,array2){
//     return [...array1,...array2]
// }
// const arr1 = [1,2,3]
// const arr2 = [4,5,6]
// console.log(mergearray(arr1,arr2));

//---------------------------------------------------------------------------------

// 29) split array

// function splitArray(numbers,size){
//     let chunks = []
//     for(let i = 0 ; i < numbers.length ; i += size){
//         chunks.push(numbers.slice(i, i + size))
//     }
//     return chunks
// }

// const size = 2
// const array  = [1,2,3,4,5,6,7]
// console.log(splitArray(array,size));

//-------------------------------------------------------------------------------


// first unique element 
// function firstUnique(number){
//     let unique = [...new Set(number)]
//     return unique[0]
// }

// const ab = [1,1,2,3,4,3,5,6,]
// console.log(firstUnique(ab));

// function printNonRepeatedElements(arr) {
//     let counts = {};
//     // Count occurrences of each element
//     for (let num of arr) {
//         counts[num] = (counts[num] || 0) + 1;
//     }
//     // Store elements that occur only once in an array
//     let nonRepeated = [];
//     for (let num of arr) {
//         if (counts[num] === 1) {
//             nonRepeated.push(num);
//         }
//     }
//     return nonRepeated; // Return the array of non-repeated elements
// }

// const array = [1, 1, 2, 3, 4, 2, 5, 6, 3];
// const numbers = printNonRepeatedElements(array);
// console.log(numbers[0]); // Output will be 


//---------------------------------------------------------------------------------------------------------

// second largest element in an array

// function secondLargest(number){
//     let sorted_array = number.sort((a,b) => b - a)
//     return sorted_array[1]
// }

// const ab = [1,24,52,46,98]
// console.log(secondLargest(ab));

//---------------------------------------------------------------------------------------------------------

// duplicate element in an array

// function duplicateNumbers(numbers){
//     let counts={}

//     for(let num of numbers){
//         counts[num] = (counts[num] || 0) + 1
//     }
//     for(let num in numbers){
//         if(counts[num] > 1){
//             console.log(num);
//         }
//     }
// }
// const array = [1, 1, 2, 3, 4, 2, 5, 6, 3];
//  duplicateNumbers(array);

//-------------------------------------------------------------------------------------------------------

// factorial of a number using recursion

// function factorial(number){
//     if(number === 1){
//         return 1
//     }
//     if(number > 1){
//         return number * factorial(number-1) 
//     }
// }
// console.log(factorial(5));

//---------------------------------------------------------------------------------------------------------

// fibannocci series

// function fibanocci(count){
//     let fibseries = [0,1]

//     for(let i = 2; i < count ; i++){
//         fibseries.push(fibseries[i-1] + fibseries[i-2])
//     }
//     return fibseries;
// }

// const count = 10
// const series = fibanocci(count)
// console.log(series);

//---------------------------------------------------------------------------------------------------------

//  Prime number

// function primeNumber(num){
//     if(num <= 1){
//         return false
//     }
//     for(let i = 2; i <= Math.sqrt(num) ; i++){
//         if(num % i === 0){
//             return false
//         }
//     }
//     return true

// }
// console.log(primeNumber(19));


//-----------------------------------------------------------------------------------------

// grouped anagrams

// function groupAnagrams(array){
//     const groupedAnagrams = {}
// array.forEach(element => {
//         const sorted_words = element.split('').sort().join('')

//         if(groupedAnagrams[sorted_words]){
//             groupedAnagrams[sorted_words].push(element)
//         }else{
//             groupedAnagrams[sorted_words]=[element]
//         }

//     });
//     return Object.values(groupedAnagrams)

// }
// const words = ["eat", "tea", "tan", "ate", "nat", "bat"];
// const grouped = groupAnagrams(words);
// console.log(grouped);

//----------------------------------------------------------------------------------------------

// const obj={
//     key1:[1,2,3],
//     key2:5,
//     key3:[4,5],
//     key4:'not an array'
// }
// function sumOfArray(obj){
//         let sum=0;
//         for(let key in obj){
//             if(Array.isArray(obj[key])){
//              sum+=obj[key].reduce((acc,digit)=>digit+acc,0)
//             }
//         }
//         return sum
// }
// console.log(sumOfArray(obj))

//------------------------------------------------------------------------------------------------------

let obj = { age : 10 , mark : 10}

//method 1-----------------------------------

// function sum(obj){
//     let sum = 0
//     let values= Object.values(obj)
//     values.forEach(num=> {
//         sum = sum + num
//     }
//     )   
//     return sum
// }

// console.log(sum(obj));


//method 2----------------------------------

// function sum(obj){
//     return Object.values(obj).reduce((acc,curr)=> acc + curr , 0)
// }
// console.log(sum(obj));

//-------------------------------------------------------------------------------------------------------

// let array = ["arya",23,"vysakh",26,49]

// function findSum(array){
//     return array.reduce((acc,curr)=> {
//         if(!isNaN(curr)){
//             return acc + curr
//         }else{
//             return acc
//         }
//     }, 0

//     )
// }
// console.log(findSum(array));


//---------------------------------------------------------------------------------------

// let array = ["soni","arya","athira"]
// let array2 = ['anna',"ms","ag"]

// //using for loop

// function combinedArray(array1,array2){
//     let comb_Array = []
//     for(let i = 0 ; i < array1.length ; i++){
//         comb_Array.push(array1[i] + ' ' + array2[i]) 
//     }
//     return comb_Array
// }
// console.log(combinedArray(array,array2));

// // without using for loop map is used 

// let combine_array = array.map((item , index) => item + ' ' + array2[index] )
// console.log(combine_array);


//---------------------------------------------------------------------------------------------------

// let array11 = ["hello","how","you"]
// let array22 = ['everone',"are","now"]

// let combined_string = ""
// for(let i = 0; i < array11.length ; i++){
//     combined_string += array11[i] + " " + array22[i] + " "; 

// }
// combined_string = combined_string.trim()
// console.log(combined_string);

//============================

// function* even(){
//     let i=0
//     while(true){
//         i = i + 2
//         yield i
//     }
// }
// const iterator = even()
// for(let i = 0 ; i <=50 ; i++){
//     console.log(iterator.next().value);
// }

//-----------------------------------------------------------------------------------------------------

// 
