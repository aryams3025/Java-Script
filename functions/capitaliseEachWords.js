function firstLetterCapitalise(sentence) {
    const firstCapital = sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    return firstCapital;
}

const sen = "hello arya how are you?";
console.log(firstLetterCapitalise(sen));
