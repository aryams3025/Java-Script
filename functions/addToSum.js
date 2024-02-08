function addToSum(array){
    return array.reduce((sum,num)=> sum + num ,0)
}
const arr = [1,2,3,4,5];
console.log(addToSum(arr));