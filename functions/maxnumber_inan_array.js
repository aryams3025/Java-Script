function findMaxNumber(arr) {
    if (arr.length === 0) {
        return "Array is empty";
    }

    let maxNumber = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxNumber) {
            maxNumber = arr[i];
        }
    }

    return maxNumber;
}

// Example usage:
const numbers = [10, 5, 8, 20, 15];
const maxNumber = findMaxNumber(numbers);

console.log("The maximum number in the array is:", maxNumber);
