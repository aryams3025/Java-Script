// // 3.Printing name and age in the console and in the page by using Query


// const express = require('express');
// const app = express();

// app.get('/',(req,res)=>{
// 	const name=req.query.name;
// 	const age = req.query.age;
// 	console.log(`The user name is ${name} and age is ${age}`);
// 	res.send(`The user name is ${name} and age is ${age}`);
// 	});
// app.listen(3000,()=>{
// 	console.log("server running on port number 3000");
// });

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const name = req.query.name;
  const age = req.query.age;

  if (!name || !age) {
    // Handle the case where name or age is missing
    res.status(400).send('Name and age are required');
    return;
  }

  console.log(`The user name is ${name} and age is ${age}`);
  res.send(`The user name is ${name} and age is ${age}`);
});
const port =2002;
app.listen(port, () => {
  console.log(`Server running on port number http://localhost:${port}`);
});
