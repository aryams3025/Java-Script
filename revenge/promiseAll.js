const promise1 = new Promise((res,rej)=>{
    res("hai")
})

const promise2 = new Promise((res,rej)=>{
    rej("rejected")
})
const promise3 = new Promise((res,rej)=>{
    res("hello")
})

const promiseAll = Promise.all([promise1,promise2,promise3])
promiseAll.then((responese)=>{
    console.log(responese);
}).catch((error)=>{
    console.log(error);
})


// promise.all il ellam resolve aanenkil mathrame resolve ellam koodi print cheyyum .
// orennam enkilum reject aanenkil reject aayathu mathram print cheyyikkum