function palindrome(string){
    const reverse_string = string.split('').reverse().join('');
    return string === reverse_string;
}

const str = "arya";
console.log(palindrome(str));