const express = require('express')
const app = express()

const port = 2000

app.get('/error',(req,res,next)=>{
    let undefined_variable = undefined
    console.log(undefined_variable.property);
})

app.use((err,req,res,next)=>{
    console.log(err);
    res.status(500).send("eroor occured")
})

app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
})