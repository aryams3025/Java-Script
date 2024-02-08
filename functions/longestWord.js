function longestWord(sentence){
    const word = sentence.split(' ');
    const long_Word = word.reduce((longest,current)=> (current.length > longest.length ? current : longest),'');
    return long_Word;
}
const sampleSentence = "hai my name is vysakh";
console.log(longestWord(sampleSentence));