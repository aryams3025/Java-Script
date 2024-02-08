const express = require('express');
const app = express();
const port = 2002;
app.get('/',(req,res)=>{
    res.send('hai hello')
});
app.listen(port,()=>{
    console.log(`server running on port http://localhost:${port}`);
})