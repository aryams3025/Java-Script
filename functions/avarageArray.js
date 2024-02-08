function averageArray(arr){
    const sum = arr.reduce((total,num )=> total + num , 0)
    return sum/arr.length;
}
const array = [1,2,3,4,5];
console.log(averageArray(array));