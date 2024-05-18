let express = require('express')
let app = express()

app.get('/:number',(req,res)=>{
    
    let number = req.params.number
        res.send('welcome ' +number)
        // if(number%2==0){
        //     res.send(`${number} is even number`)
        // }else{
        //     res.send(`${number} is odd number`)
        // }
    
}).listen(3000)