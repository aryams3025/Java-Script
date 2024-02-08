function unique(array){
    return [...new Set(array)]
}

const array_list = [1,34,43,34,78];
console.log(unique(array_list));