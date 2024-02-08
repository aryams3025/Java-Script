const weakset = new WeakSet();
let obj1 = {key : 'value'};
let obj2 = {key : 'value'};

console.log(obj1);

weakset.add(obj1);
weakset.add(obj2);

console.log(weakset.has(obj1));
console.log(weakset.has(obj2));

obj1 = null;
console.log(weakset.has(obj1));