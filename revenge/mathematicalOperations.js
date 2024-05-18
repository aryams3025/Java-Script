// sum of n numbers

// let sum = 0 ; n = 10
// for(let i = 0 ; i <= n ; i++ ){
//     sum = sum + i
// }
// console.log(sum);

// product of n numbers 

// let product = 1 , n =10
// for(let i = 1; i <=n ; i++){
//     product = product * i
// }
// console.log(product);

// function product(n){
//     let product = 1
//     for(let i = 1; i <= n ; i++){
//         product = product * i
//     }
//     return product
// }

// console.log(product(10));

// factorial of a number using recursion

// function factorial(n){
//     let fact = 1
//     if(n == 1 || n == 0){
//         return 1
//     }
//     for(let  i = 2; i <= n ; i++){
//         fact = n * factorial(n-1)
//     }
//     return fact
// }

// console.log(factorial(4));

// without recursion

function withOutRecursionFactorial(n){
    let fact = 1
    if( n == 1 || n == 0){
        return 1
    }else{
        for(let i = 2 ; i <= n ; i++){
            fact = fact * i
        }
        return fact
    }
}

console.log(withOutRecursionFactorial(4));