
let x = 5;
 
function blockExample() {
 let x = 2 //this is function scope;
 if(x >= 3) {
   let x = 10; // this is block scope
   console.log(x, "inside if block");
 } else {
   let x = 1;
   console.log(x, "inside else block")
 }
 console.log(x, "inside function");
}
 
blockExample();
console.log(x, "global example");