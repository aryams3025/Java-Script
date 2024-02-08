var i = 0; 
var intervalid = setInterval(function(){
    i = i+1;
    console.log(i);
    if (i >= 10){
        clearInterval(intervalid);
    }
},1000);