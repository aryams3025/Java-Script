var http = require("http");
http.createServer((req,res)=>{
		let path = request.url;
		if(path==='/'|| path.toLowercase==='/home')
			{
  				res.send("WELCOME");
			}
		else
		{
 				res.send("Page Not Found");
		}
}).listen(3000);