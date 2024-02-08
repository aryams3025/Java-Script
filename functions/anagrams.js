function checkAnagrams(str1, str2){
    const stri1 = str1.split('').sort().join('');
    const stri2 = str2.split('').sort().join('');
    return stri1 ===  stri2;
}

const string1 = "Arya";
const string2 = "Ayra";
console.log(checkAnagrams(string1,string2));



function secondLargest(arr){
    const secondLargestElement = [...new Set(arr)].sort((a,b)=>  b - a);
    return secondLargestElement[1]; 
}

const array = [ 1,2,3,4,5,6,7,8];
console.log(secondLargest(array));