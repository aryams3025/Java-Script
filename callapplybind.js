const name1 ={
    first_name : "Arya",
    last_name : "MS"
}

const name2 ={
    first_name : "Anjaly",
    last_name : "Arun"
}

let fullname = function(place,district){
    console.log(this.first_name +" "+ this.last_name+" from " +place+ " cls,"+district);
}

fullname.call(name1,"Thalanadu" ,"Kottayam");
fullname.apply(name2,["Mevada","Kottayam"]);

let OrginalName = fullname.bind(name1, "Erattupetta" , "Kottayam");
OrginalName();