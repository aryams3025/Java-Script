const person = {
    name : "Arya",
    age : 30
};

Object.freeze(person);

person.name = "Vysakh";
person.age = 25;

console.log(person);