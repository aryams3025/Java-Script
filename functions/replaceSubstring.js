function replaceSubstring(orginalstring, oldsubstring , newsubstring){
    return orginalstring.replace(oldsubstring,newsubstring);
}
const sentence = "I love you";
console.log(replaceSubstring(sentence,"love","like"));