function removeFalsyValues(arr){
    const correct_array = arr.filter(Boolean);
    return correct_array;
}

const array = [1,0,true,false,56,"string"];
console.log(removeFalsyValues(array));