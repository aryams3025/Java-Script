//sum of array elements using reduce
function SumArray(array){
    return array.reduce((acc,curr)=>acc + curr,0)
}
const arr = [1,2,3,4,5];
console.log(SumArray(arr));

//product of an array using reduce
function productArray(array){
    return array.reduce((acc,curr)=>acc*curr)
}
console.log(productArray(arr));

//flatten an array using reduce

//counting occurence of elements
function countOccurence(array){
    return array.reduce((acc,curr)=>{
        acc[curr]= (acc[curr] || 0) + 1;
        return acc;
    },{})
}

console.log(countOccurence(arr));

