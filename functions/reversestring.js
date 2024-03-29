function reverseString(str) {
    let reversed = '';

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return reversed;
}

// Example usage:
const originalString = "Hello, World!";
const reversedString = reverseString(originalString);

console.log(`Original String: ${originalString}`);
console.log(`Reversed String: ${reversedString}`);
