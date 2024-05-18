//node js file system
// fs module

let fs = require("fs")

// the above line requires the file system module

//creating a file using writeFile
//first argument  ---- name 
// second argument --- content
// third argument  --- function

fs.writeFile("sample.txt","hello arya how are you?",function(err){
    if(err){
        console.log("unable to run")
    }
})

// append new content using appendFile
fs.appendFile("sample.txt","I am fine",function(err){
    if(err){
        console.log("unable to run")
    }
})


// to read the content of a file ,, to want the content then we can convert buffer
//to content using utf8
fs.readFile("sample.txt","utf8",function(err,data){
    console.log(data)
    if(err){
        console.log("unable to run")
    }
})

//delete file
fs.unlink("sample.txt",function(err){
    console.log(err);
})

var http = require('http')
http.createServer((req,res)=>{
    fs.readFile("index.html",function(err,data){
        res.write(data);
        res.end()
    })
}).listen(2000)