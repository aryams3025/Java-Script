// function* evenNum(start,end){
//     for(let i=start;i<=end;i++){
//         yield i;
//     }
// }
// const iterator = eveniterator(1,20);
// for (let i = 0; i < 10; i++) {
//     console.log(iterator.next().value);
//   }



function* evenNumber(start,limit){
    for(let i = start; i <= limit ; i=i+2){
        yield i;
    }
}
const start =2;
const limit = 20

const evenNumberGen = evenNumber(start,limit);

for(const num of evenNumberGen){
    console.log(num);
}

function* multipleOfFive(start,limit){
    for(let i = start; i <= limit ; i++){
        yield i;
    }
}
const sta =1;
const lim = 10

const mul = multipleOfFive(sta,lim);

for(const num of mul){
    console.log(num*5);
}
