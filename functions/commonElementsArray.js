function commonElements(arr1 , arr2){
    const commonElem = arr1.filter(element =>  arr2.includes(element));
    return commonElem;
}

const array1 = [1,2,3,4,5];
const array2 = [3,4,5,6,7];
console.log(commonElements(array1,array2));