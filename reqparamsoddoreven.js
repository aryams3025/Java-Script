const express = require('express');
const app = express();
const port = 2002;
app.get('/:value',(req,res)=>{
	const value = req.params.value;
    console.log(`the value is ${value}`)
        if(value%2===0){
		console.log("The number is even ");	
         }
	else if(value%2===1){
		console.log("The number is not even")
		}
    else{
        console.log("Enter a valid number")
    }	
});
app.listen(port,()=>{
	console.log(`http://localhost:${port}`);

});