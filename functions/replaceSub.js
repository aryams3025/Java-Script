function replaceSubstring(sentence,oldword,newword){
    return sentence.replace(oldword,newword);
}
const string = " i love you";
console.log(replaceSubstring(string,"love","like"));