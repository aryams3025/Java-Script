//type1

function filterEvenNumber(number){
    return number.filter(num => num%2 ===0);
}

let numbers = [1,2,3,4,5];
console.log(filterEvenNumber(numbers));

//type 2

const numarray= [3,4,5,6,7,8];
const evenarray = numarray.filter(filterEven);

function filterEven(n){
    return n%2===0
}
console.log(evenarray);