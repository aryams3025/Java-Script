function hi(){
    console.log("hi this is my hi function");
}

function hello(cb){
    console.log("this is my hello function");
    cb()
}

hello(hi)