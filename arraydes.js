// program 1

// const numbers = [1,2,3,4,5,];
// const [first,second,third,fourth,fifth] = numbers;

// console.log(first);
// console.log(second);
// console.log(third);
// console.log(fourth);
// console.log(fifth);

//program 2
// const numbers1 = [1,2,3,4,5,];
// const [first,second,third,fourth,fifth] = numbers1;

// console.log(first);
// console.log(second);
// console.log(fifth);

//program 3 skipping the elements
const num = [1,2,3,4,5]
const[first,second,,,fifth] = num;
console.log(first);
console.log(second);
console.log(fifth);


// using rest operator
const n1 = [1,2,3,4,5]
const [a,b,...c] = n1;
console.log(a);
console.log(b);
console.log(c);