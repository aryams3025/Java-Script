function palindrome(string){
    const reverse_string = string.split('').reverse().join('');
    return string === reverse_string;
}

const string = "vysakh";
const string2 = "arya";
const string3 = "level";
console.log(palindrome(string));
console.log(palindrome(string2));
console.log(palindrome(string3));



//longest word in a sentence

function longestWord(sentence){
    const words = sentence.split('');
    const longest_word = words.reduce((longest,current)=>(current.length  > longest.length ? longest : current),' ');
    return longest_word;
}

const str = "i love you ammaa";
console.log(longestWord(str));