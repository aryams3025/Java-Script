// function findSecondLargest(arr){
//     let first,second;

//     if(arr.length < 2){
//         return "Invalid Input";
//     }
//     arr.sort();

//     for(let i = arr.length -2; i >= 0 ; i-- ){
//         if(arr[i] ! == arr[arr.length -1]){
//             return arr[i];  
//         }
//     }
//     return "there is no second largest element";

// }

// const array = [12,34,22,67,89,55];
// console.log(findSecondLargest(array));

function findSecondLargest(arr) {
    let first, second;

    if (arr.length < 2) {
        return "Invalid Input";
    }
    arr.sort();

    for (let i = arr.length - 2; i >= 0; i--) {
        if (arr[i] !== arr[arr.length - 1]) {
            return arr[i];
        }
    }
    return "There is no second largest element";
}

const array = [12, 34, 22, 67, 89, 55];
console.log(findSecondLargest(array));
