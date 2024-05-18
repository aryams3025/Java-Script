const student1 = {
    name : "Arya",
   
    getName(){
        console.log(this.name);
    },
    getSample(age,department){
        console.log(`${this.name} age is ${age} and my department is ${department}`);
    }
}

const student2 = {
    name : "Vysakh"
}

// call ,apply and bind are function borrowing . first oject conain a function getName()  but in the second object 
// does not contain a function , in the second object want the same function of the first object . so the second 
// object borrows the functon from first object , then 


student1.getName.call(student2)

// apply function also a borrowing function , but in this case of apply one difference is that if the apply function 
// contains an array when one or more parameters passed . i add another function getSample() in this function contains
//two parameters age and department . then in apply method we can pass the value of the that object .

student1.getSample.apply(student1,[23,"iT"])

student1.getSample.apply(student2,[25,"Audit"])

// in the case of bind it is same as the apply method but it has only one difference it assign to a variable after that 
//it called . why it assigned to a varible otherwise it only print that function

let bindSample = student1.getSample.bind(student2, 24,"GST")
bindSample()