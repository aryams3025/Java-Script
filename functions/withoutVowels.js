function hasVowels(sentence) {
    return /[aeiou]/i.test(sentence);
}

function withoutVowels(arr) {
    return arr.filter((sentence) => !hasVowels(sentence));
}

const stringArray = ["hello", "world", "example", "hh"];
console.log(withoutVowels(stringArray));
