function findMaxMin(array){
    const max = Math.max(...array);
    const min = Math.min(...array);
    return {max , min};
}

const number_array = [23,45,3,67,89,45,1,66];
console.log(findMaxMin(number_array));