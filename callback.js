function addNumbers(a,b,callback){
    const result =  a + b;
    callback(result);
}

function displayResult(sum){
    console.log(`The sum is ${sum}`);
}

addNumbers(3,7,displayResult);