const fs = require('fs');

fs.unlink("main.txt",function(err){
    if(err){
        throw err;
    }
})

fs.writeFile("main.txt","hello how are you?",function(err){
    if(err){
        throw err;
    }
})