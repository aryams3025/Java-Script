// var http = require('http');
// v
// var server = http.createServer(function(req,res){
//     res.writeHead(200,{'content-type':'text/plain'});

//     console.log("a");
//     console.log("b");
//     process.nextTick(function(){
//         console.log("c");
//         res.end("hello");
//     })

//     console.log("d");
//     console.log("e");
// })

// server.listen(2000,()=>{
//     console.log("the server running on http://localhost:2000");
// })


var http = require('http');

var server = http.createServer(function(req, res) {
    res.writeHead(200, {'content-type': 'text/plain'});

    console.log("a");
    console.log("b");

    process.nextTick(function() {
        console.log("c");
        res.end("hello");
    });

    console.log("d");
    console.log("e");
});

server.listen(2000, () => {
    console.log("The server is running on http://localhost:2000");
});
