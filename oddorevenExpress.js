const express = require('express');
const app = express();
const port = 2002;

app.get('/:value',(req,res)=>{
    const value =req.params.value;
    console.log(`The value is ${value}`);
    if(value %2 === 0){
        console.log(`${value} is even number`);
    }else if(value %2 == 1){
        console.log(`${value} is odd number`);
    }
    else{
        console.log("not a number");
    }

})

app.listen(port,()=>{
    console.log(`server running on the port http://localhost:${port}`);
})