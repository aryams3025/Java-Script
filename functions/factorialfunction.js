function calculateFactorial(number){
    if(number < 0 ){
        console.log("This is not valid");
    }
    else if(number === 0 || number ===1){
        return 1;
    }else{
        let factorial = 1;
        for(let i = 2; i <= number ; i++ ){
            factorial = factorial * i ; 
        }
        return factorial;
    }
}
   

let num = 5;

console.log(calculateFactorial(num));