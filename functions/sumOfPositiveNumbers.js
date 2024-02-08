function sumPositiveNumbers(array){
    return array.reduce((sum,num)=>num > 0 ? sum + num : sum , 0  )
}

const arr = [-1,2,3,4,5,6,-2,-3,-4];
console.log(sumPositiveNumbers(arr));