// setInterval(()=>{
//     console.log("i have a revenge ");
// }, .5 * 1000
// )

// to stop printing the message when it prin 5 times

// just add a counter variable 
// then first set the counter variable to zero 
//assign the setInterval to any variable
// inside the setinterval add the count 
// then add a if condition , if the counter equals to 5 then clearinterval processed 
//inside the clearInterval function pass the setInterval assigned variable name

let count = 0 
let interval = setInterval(()=>{
    console.log("i have a revenge ");
    count++
    if(count === 5){
        clearInterval(interval)
        console.log("set interval ended");
    }
}, .5 * 1000)