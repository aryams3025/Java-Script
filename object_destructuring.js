const array = {
    name : "Arya",
    age : 30 , 
    place : "vdfgh", 
    phnno:70865563
};
const { name :new_name ,age: new_age ,...rest } = array;
console.log(new_name);
console.log(new_age);
