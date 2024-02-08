// palindrome

// function palindrome(str){
//     let reversed_string= str.split(' ').reverse().join(' ');
//     return reversed_string === str;
// }


// const string2 = "level";

// console.log(palindrome(string2));


// longest word in a sentence

// function longestWord(sentence){
//     let words = sentence.split(' ');
//     const longestWords = words.reduce((longest,current)=> (current.length > longest.length ?current : longest),' ');
//     return longestWords
// }

// const sent = " Hai hello Vysakh how are you"
// console.log(longestWord(sent));


//capitalise each word in a sentence

// function capitaliseFirstLetter(sentence){
//     const word = sentence.split(' ');
//     const capitalised = word.map(words=>words.charAt(0).toUpperCase()+words.slice(1)).join(' ');

//     return capitalised;
// }

// const sen = "hai how are you?";
// console.log(capitaliseFirstLetter(sen));



//Remove elements based on certain condition

// function removeElement(array){
//     return array.filter(num => num %2 === 0)
// }

// const arr = [1,2,3,4,5,6];
// console.log(removeElement(arr));

// array to sum 

// function arraySum(array){
//     return array.reduce((sum,num)=>sum+num,0);
// }

// const array = [1,2,3,4,5,6];
// console.log(arraySum(array));


//reverse a string

// function reverse(string){
//     return string.split('').reverse().join('');

// }

// const str = "hello";
// console.log(reverse(str));

//reverse an array

// function reverse(array){
//     return array.reverse();
// }
// const arr= [1,2,3,4,5];
// console.log(reverse(arr));



//common elements in an array


// function commonElem(arr1,arr2){
//     const common =arr1.includes(arr2);
//     return common;
// }
// const array1=[1,2,3,4,5];
// const array2 =[2,3,45,7];
// console.log(commonElem(array1,array2));

// function commonElem(arr1,arr2){
//     return arr1.filter(element => arr2.includes(element))
// }
// const array1=[1,2,3,4,5];
// const array2 =[2,3,45,7];
// console.log(commonElem(array1,array2));


//find average of an array

// function average(array){
//     let sum = array.reduce((sum, num) => sum+num,0)
//     let average = sum/array.length;
//     return average;
// }

// const arra = [1,2,3,6];
// console.log(average(arra));


//remove false values from an array

// function falsyvalues(arra){
//     return arra.filter(Boolean);
// }

// const array = [1,2,null, 0,true,false, 67,90];
// console.log(falsyvalues(array));


//check for anagrams

// function anagram(str1,str2){
//     let s1 = str1.split('').sort().join('');
//     let s2 = str2.split('').sort().join('');
//     return s1 === s2;
// }

// const string1 = "earth";
// const string2 = "heart";

// console.log(anagram(string1,string2));



//second largest element in an array

// function secondLargest(array){
//     let uniquesortedArray = [... new Set(array)].sort((a,b)  => b-a);
//     return uniquesortedArray[1];
// }

// const arr = [1,2,4,57,32,1,6,2,55,98,33,89];
// console.log(secondLargest(arr));

//flatten a nested array

// function nestedFlatt(array){
//     let con = array.flat(Infinity);
//     return con;
// }

// const arr = [1, [2, [3, 4], 5], 6];
// console.log(nestedFlatt(arr));


// function removevowels(string){
//     return string.replace(/[aeiou]/gi,'');
// }

// const str = "hello"
// console.log(removevowels(str));