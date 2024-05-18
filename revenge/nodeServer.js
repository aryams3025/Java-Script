const http = require('http')
const port = 2001

const server = http.createServer((req,res)=>{
    res.end("hi")
})
server.listen(port,()=>{
    console.log(`server running on http://localhost:${port}`);
})