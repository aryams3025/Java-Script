function* generateNumbers(start, end) {
    for (let i = start; i <= end; i ++) {
        yield i;
    }
}

// Create a generator object
const numbersGenerator = generateNumbers(1, 10);
// console.log(numbersGenerator.next().value)
// console.log(numbersGenerator.next().value)

// Iterate over the generated numbers using a for...of loop
for (const num of numbersGenerator) {
    console.log(num);
}
