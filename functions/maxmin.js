function maxminElemArray(array){
    const max = Math.max(...array);
    const min = Math.min(...array);
    return {max , min};
}
const number_array = [1,34,56,23,78,99];
console.log(maxminElemArray(number_array));