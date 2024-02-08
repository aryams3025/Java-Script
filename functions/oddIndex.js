function removeOddIndex(array){
    const evenindex = array.filter((index)=> index %2 === 0 )
    return evenindex;
}
const number_array = [1,2,3,4,5,6,7];
console.log(removeOddIndex(number_array)); 