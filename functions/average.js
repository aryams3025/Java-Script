function findAverage(numbers) {
    const sum = numbers.reduce((total, num) => total + num, 0);
    return sum / numbers.length;
}

const numberArray = [10, 20, 30, 40, 50];
const average = findAverage(numberArray);
console.log(average); // Output: 30
