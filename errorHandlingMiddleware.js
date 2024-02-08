const express = require('express');
const app = express();

app.use('/home',(err,req,res,next)=>{
    console.error(err.stack);
    res.status(500).send("something went wrong");
})

const port = 2002;
app.listen(port,()=>{
    console.log(`server running on port http://localhost:${port}`);
})