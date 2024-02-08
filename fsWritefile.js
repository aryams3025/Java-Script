const fs = require('fs');

fs.writeFile("mainFile2.txt","hello how are you?",function(err){
    if(err){
        throw err;
        console.log("writefile");
    }
})