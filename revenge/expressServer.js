const express = require('express')
const app = express()
const port  = 2000

app.get('/',(req,res)=>{
    res.end("hello")
})

app.listen(port,()=>{
    console.log(`server running on http://localhost:${port}` );
})