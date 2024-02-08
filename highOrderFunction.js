const radius = [1,2,3,4,5];
const area = (radius) => {
    return Math.PI * radius * radius;
}

const diameter = (radius) => {
    return 2 * radius;
}


const calculateArea = (radiusArray, logic) => {
    const output = [];
    for (let i = 0; i < radiusArray.length; i++) {
        output.push(logic(radiusArray[i]));
    }
    return output;
}


console.log(calculateArea(radius, area));
console.log(calculateArea(radius, diameter));

