function removeVowels(word){
    const result = word.replace(/[aeiou]/gi,'');
    return result;
}

const words = "hello arya how are you";

console.log(removeVowels(words));