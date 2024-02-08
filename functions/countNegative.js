function countNegativeNumbers(arr){
    return arr.filter(num => num < 0).length;
}
const numbers = [1,-2,3,-4,5];
console.log(countNegativeNumbers(numbers));