function* stringGenerator(){
    yield "hello"
    yield "arya"
}

const iterator = stringGenerator();

console.log(iterator.next().value);
console.log(iterator.next().value);