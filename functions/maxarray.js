// function findMaxNumber(arr){
//     if(arr === 0){
//         console.log("The array is empty")
//     }
//     let maxNumber = arr[0];
    
//     for(let i =0 ; i < arr.length ; i++){
//         if(arr[i] > maxNumber){
//             maxNumber = arr[i] ;
//         }
//     }
//     return maxNumber;
    
// }

// const numbers = [1, 50, 43, 89, 44, 28];
// const maxNumber = findMaxNumber(numbers);
// console.log("The max element in an array is : ", maxNumber);


function maxArray(arr){
    return Math.max(...arr);
}

const number = [1, 45, 67, 23];
console.log(maxArray(number));