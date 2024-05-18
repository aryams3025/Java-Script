const promise1 = new Promise((res,rej)=>{
    rej("hai")
})

const promise2 = new Promise((res,rej)=>{
    res("rejected")
})
const promise3 = new Promise((res,rej)=>{
    res("hello")
})

const promiseRace = Promise.race([promise1,promise2,promise3])
promiseRace.then((responese)=>{
    console.log(responese);
}).catch((error)=>{
    console.log(error);
})

// in the case of race it does not matter it is resolved or rejected . The first one is printed.