function capitalizeEachWord(sentence) {
    // Check if the sentence is not empty
    if (sentence.length === 0) {
        return sentence;
    }

    // Split the sentence into an array of words
    const words = sentence.split(' ');

    // Capitalize the first letter of each word
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));

    // Join the words back into a sentence
    const capitalizedSentence = capitalizedWords.join(' ');

    return capitalizedSentence;
}

// Example usage:
const originalSentence = "hello my name is arya";
console.log(capitalizeEachWord(originalSentence));

 