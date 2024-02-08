const fs = require('fs');
const CurrntDate= new Date().toString();

fs.writeFile("maintext.txt",CurrntDate,function(err){
    if(err) throw err;
    console.log("Created file????")
})