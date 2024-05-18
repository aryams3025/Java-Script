// function reverse(start,end){
//     let i
//     while(true){
//         i = i + 1
//         yield i
//     }
// }
// const iterator = reverse(100,1)
// for(i = 100 ; i <= 1 ; i--){
//     console.log(iterator.next().value);
// }

function* reverse(start, end) {
    let i = start; 
    while (i >= end) {
        yield i;
        i--; 
    }
}

const iterator = reverse(100, 1);
for (const value of iterator) { 
    console.log(value);
}
