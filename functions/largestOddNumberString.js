// function largestOddNumber(num){
//     let numbers = num.split(/\D+/);
//     let odd_numbers = numbers.filter(nums => nums % 2 !== 0 );
//     let largestOddNumber = odd_numbers.reduce((max,current)=>Math.max(max,current),-1)
//     let largestOddNumber !== -1 ? largestOddNumber.toString(): " ";
// }

// const number ="52";
// console.log(largestOddNumber(number));


function largestOddNumber(num) {
    let numbers = num.split(/\D+/);
    let odd_numbers = numbers.filter(nums => nums % 2 !== 0);
    let largestOddNumber = odd_numbers.reduce((max, current) => Math.max(max, current), -1);
    
    return largestOddNumber !== -1 ? largestOddNumber.toString() : "No odd numbers found";
}


const number = "52";
console.log(largestOddNumber(number));
