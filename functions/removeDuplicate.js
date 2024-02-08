function unique(array){
    return [...new Set(array)];
}

const number_array = [1,2,3,2,4,3,5];
console.log(unique(number_array));