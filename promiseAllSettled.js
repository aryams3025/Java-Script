const promise1 = new Promise((resolve,reject) =>{
    resolve("Success");
});

const promise2 = new Promise((resolve,reject)=>{
    reject("Fail");
});
const promise3 = new Promise((resolve,reject)=>{
    resolve("Success 3");
});
const allpromises= Promise.allSettled([promise1,promise2,promise3]);
allpromises.then((response)=>{
    console.log(response);
})
.catch((error)=>{
    console.log(error);
})