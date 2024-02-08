function divisibleBY3(number){
    switch(number%3){
        case 0:
            console.log("number divisible by 3 ");
            break;
        default:
            console.log("number is not divisible by 3");  
            break;  
    }
}
divisibleBY3(9);



// function checkDivisibilityByThree(number) {
//     switch (number % 3) {
//         case 0:
//             console.log(number + ' is divisible by 3');
//             break;
//         default:
//             console.log(number + ' is not divisible by 3');
//             break;
//     }
// }


// checkDivisibilityByThree(9);  
// checkDivisibilityByThree(10); 
