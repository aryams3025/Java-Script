function removeVowels(string){
    const word = string.replace(/[aeiou]/gi,'');
    return word;
}

const str = "hello";
console.log(removeVowels(str));