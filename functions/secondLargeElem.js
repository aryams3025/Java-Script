function secondLargestNumber(arr) {
    const uniqueSortedNumbers = [...new Set(arr)].sort((a, b) => b - a);
    return uniqueSortedNumbers[1];
}

const numbersArray = [10, 5, 8, 20, 15, 10];
const secondLargest = secondLargestNumber(numbersArray);
console.log(secondLargest); // Output: 15













function secondLargeste(arr){
    const uniquenumber = [...new Set(arr)].sort((a,b) => b-a);
    return uniquenumber[1];
}

let array = [1,6,3,2,8,9];
console.log(secondLargeste(array));