const pro = new Promise((res,rej)=>{
    rej("This is first");
})

// async function fetchData(){
//     const response = await pro;
//     console.log(response);
// }
// fetchData();


// const fetchData = async() =>{
//     const response = await pro;
//     console.log(response);
// }
// fetchData();


const fetchDatas = async() =>{
    try{
        const response = await pro;
        console.log(response);
    }  catch(err){
        console.log("erorvhcgg");
    }
   
}
fetchDatas();