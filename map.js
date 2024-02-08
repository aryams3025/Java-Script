const arr = [1,2,3,4,5];
const new_arr = arr.map(Math.sqrt);
console.log(new_arr);

const num = [3,6,9,12];
const new_array = num.map(mulBy10);

function mulBy10(x){
    return x * 10 ;
}
console.log(new_array);