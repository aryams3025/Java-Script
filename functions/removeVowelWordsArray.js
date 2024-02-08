function containsVowels(word) {
    // Check if the word contains any vowels (case-insensitive)
    return /[aeiou]/i.test(word);
}

function removeWordsWithVowels(arrayOfWords) {
    // Filter out words that contain vowels
    const wordsWithoutVowels = arrayOfWords.filter(word => !containsVowels(word));

    return wordsWithoutVowels;
}

// Example usage:
const originalWordsArray = ["hello", "world", "apple", "banana", "js"];
const wordsArrayWithoutVowels = removeWordsWithVowels(originalWordsArray);

console.log(wordsArrayWithoutVowels);
// Output: [ 'world', 'js' ]
