function duplicate(array){
    return array.filter((elem,index,value)=>value.indexOf(elem)!==index)
}
let array = [1,2,4,2,4,5]
console.log(duplicate(array));

function nonduplicate(array){
    return array.filter((elem,index,value)=>value.indexOf(elem)==index)
}
let array1 = [1,2,4,2,4,5]
console.log(nonduplicate(array1));