const promise1 = new Promise((res,rej)=>{
    res("hai")
})

const promise2 = new Promise((res,rej)=>{
    rej("rejected")
})
const promise3 = new Promise((res,rej)=>{
    res("hello")
})

const promiseAllSettled = Promise.allSettled([promise1,promise2,promise3])
promiseAllSettled.then((responese)=>{
    console.log(responese);
}).catch((error)=>{
    console.log(error);
})

// in the case of allsettled it prints all the romise with the corresponding status such as rejected, fulffilled 
// the status as pending . 