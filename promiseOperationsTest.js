const promise1 = new Promise((res,rej)=>{
    res(["Arya", "Vysakh"]);
})
const promise2 = new Promise((res,rej)=>{
    rej(["Gokul","Aswin","Rahul"]);
})

// const promisearray = Promise.all([promise1,promise2]); // ["Gokul","Aswin","Rahul"]

// const promisearray = Promise.allSettled([promise1,promise2]); 

// [
//     { status: 'fulfilled', value: [ 'Arya', 'Vysakh' ] },
//     { status: 'rejected', reason: [ 'Gokul', 'Aswin', 'Rahul' ] }
// ]

const promisearray = Promise.race([promise1,promise2]);  //[ 'Arya', 'Vysakh' ]  


promisearray.then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
})