//Create an Express route that accepts two numbers as query parameters and displays their sum on a web page

const express = require('express')
const app = express()
const port  = 2002

app.get('/:num1/:num2',(req,res)=>{
   const num1 = req.query.num1
   const num2 = req.query.num2
    res.send(`the sum of two numbers is ${num1+num2}`)
})
app.listen(port,()=>{
    console.log(`The server running on http://localhost:${port}`)
})