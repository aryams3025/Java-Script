function capitalEachWord(sentence){
    if(sentence.length === 0){
        return sentence;
    }

    const words = sentence.split(' ');

    const capitalizedSentence = words.map(words => words.charAt(0).toUpperCase()+words.slice(1));

    const capsentence = capitalizedSentence.join(' ');
    return capsentence;

}

const sent = "hello my name is arya";
console.log(capitalEachWord(sent));