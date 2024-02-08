let weakmap = new WeakMap();
let obj1 = { id : 2 };
let obj2 = { id : 3 };

weakmap.set(obj1 , 'value');
weakmap.set(obj2, 'value');

console.log(weakmap.get(obj1));
console.log(weakmap.get(obj2));

obj1 = null;

weakmap.get(obj1);