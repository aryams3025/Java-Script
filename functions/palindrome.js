function palindrome(str) {
    
    str = str.toLowerCase().replace(/ /g, '');
    
    return str === str.split("").reverse().join("");
}

let string = "Arya";
console.log(palindrome(string));





function isPalindrome(str) {
    // Convert to lowercase and remove spaces for case-insensitivity
    str = str.toLowerCase().replace(/ /g, '');

    let isPalindrome = true;

    for (let i = 0; i < Math.floor(str.length / 2); i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            isPalindrome = false;
            break;
        }
    }

    return isPalindrome;
}

let string1 = "Arya";

if (isPalindrome(string1)) {
    console.log(`${string1} is a palindrome.`);
} else {
    console.log(`${string1} is not a palindrome.`);
}
