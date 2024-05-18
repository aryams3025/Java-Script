// function duplicate(array){
//     return array.filter((elem , index , num)=>num.indexOf(elem) !== index)
// }

// let arr = [1,2,3,4,2,3,5,6]
// console.log(duplicate(arr));


// function* infiniteloop(start,end){
//     let i = start
//     while(i > end){
       
//         yield i 
//         i = i - 2
//     }
// }

// const iterator  = infiniteloop(100,2)
// for(let num of iterator){
//     console.log(num);
// }


// const promise = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         let num = Math.random()
//         if(num > 0.5){
//             res("num is less than 0.5")
//         }else{
//             rej("rejected")
//         }
//     },1000)
// }).then((response)=>{
//     console.log(response);
// }).catch((error)=>{
//     console.log(error);
// })


// let fs = require('fs')


// fs.writeFile("excercise1.txt","how are you?",function(err){
//     if(err){
//         console.log(err);
//     }
// })

// const fs = require('fs');

// fs.writeFile("exercise1.txt", "how are you?", function(err) {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log("File has been written successfully.");
//     }
// });



// fs.appendFile("exercise1.txt", "hello ?", function(err) {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log("File has been written successfully.");
//     }
// });

// const express = require('express')
// const app = express()
// const port = 2000

// app.get('/:value',(req,res)=>{
//     let num = req.params.value
//     if(num % 2 == 0){
//         res.send("number is even")
//         console.log("the number is even");
//     }else{
//         res.send("the number is odd")
//         console.log("the number is odd");
//     }
// })

// app.listen(port,()=>{

//     console.log(`http://localhost:${port}`);
// })


// const express = require('express')
// const app = express()
// const port = 2000

// app.get('/name',(req,res)=>{
//     let name = req.query.name
//     if(name){
//         res.send(`welcome ${name}`)
//         console.log(`welcome ${name}`);
//     }else{
//         console.log("error");
//     }
    
// })

// app.listen(port,()=>{
//     console.log(`http://localhost:${port}`);
// })

// const express = require('express');
// const app = express();
// const port = 2000;

// app.get('/name', (req, res) => {
//     let name = req.params.name;
//     console.log(name);
//     if (name) {
//         res.send(`Welcome ${name}`);
//         console.log(`Welcome ${name}`);
//     } else {
//         res.status(404).send("Not Found");
//         console.log("Not Found");
//     }
// });

// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });




// let obj ={
//     key1 : 10,
//     key2 : 30,
//     key3 : 20
// }

// if (Object.keys(obj).length > 0) {
//     let maxKey = Object.keys(obj).reduce((a,b) => obj[a] > obj[b] ? a : b)
//     delete obj[maxKey]
// }
// console.log(obj);


// let object1 = {
//     mark1 : 30,
//     mark2 : 60,
//     mark3 : 80,
//     mark4 : 40
// }

// if(Object.keys(object1).length > 0){
//     let maxKey = Object.keys(object1).reduce((a,b)=> object1[a] > object1[b] ? a : b)
//     delete object1[maxKey]
//     console.log(delete object1[maxKey])
// }


// console.log(object1);



// let object ={name : "arya", age : 23}
// console.log(object?.phone)

// console.log(typeof(object));     //object

// let a1 = [1,2,4,5]
// console.log(typeof(a1));         // object
// let a2 = [1,2,4,5,{a:2,b:4}]
// console.log(typeof(a2))          //object


// console.log(typeof "John");
// console.log(typeof 3.14);
// console.log(typeof NaN);
// console.log(typeof false);
// typeof [1, 2, 3, 4]
// typeof {name:'John', age:34}
// typeof new Date()
// console.log(typeof function () {});
// typeof myCar
// console.log(typeof null);

// const person = {firstName:"John", lastName:"Doe", age:50};
// console.log("firstName" in person);
// console.log("age" in person);
// console.log("phn" in person);


// const express = require('express');
// const apps = express();

// apps.get('/users', (req, res) => {
//   const { name, age } = req.query;
//   console.log(`My name is ${name} and age is ${age}`);
//   res.send(`My name is ${name} and age is ${age}`);
// });

// apps.listen(3000, () => {
//   console.log(`http://localhost:3000`);
// });




const express = require('express');
const app = express();

app.get('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  console.log(`My name is ${name} and age is ${age}`);
  res.send(`My name is ${name} and age is ${age}`);
});

app.listen(3000, () => {
  console.log('http://localhost:3000');
});
