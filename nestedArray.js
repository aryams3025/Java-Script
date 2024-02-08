const nestedArray = [{ ad: [1, 2, 3] }, [1, 2], { cd: [1, 2, 3] }];

let result = nestedArray.flat(Infinity)
let res = result.reduce((acc,curr)=>acc + (typeof curr === 'number'?curr:0),0)
console.log(res);


// const nesteArray = [{ ad: [1, 2, 3] }, [1, 2], { cd: [1, 2, 3] }];

// let resul = nestedArray
//   .flat(Infinity)
//   .reduce((acc, curr) => acc + (typeof curr === 'number' ? curr : 0), 0);

// console.log(result);
