var arr = [6, 4, 5, 6, 7, 7];
var obj = {
 author: "Christina Kopecky",
 title: "How to parse JSON objects",
 published: false
}
console.log("======== ARR EXAMPLE ==========");
console.log("orig arr=====>", arr);
console.log("stringified arr=====>", JSON.stringify(arr));
console.log("proof of type=====>", typeof JSON.stringify(arr));
console.log("parsed string=====>", JSON.parse(JSON.stringify(arr)));
console.log("proof of type=====>", typeof JSON.parse(JSON.stringify(arr)), "\n\n");
 
console.log("======== OBJ EXAMPLE ==========");
console.log("orig obj=====>", obj);
console.log("stringified obj=====>", JSON.stringify(obj));
console.log("proof of type=====>", typeof JSON.stringify(obj));
console.log("parsed string=====>", JSON.parse(JSON.stringify(obj)));
console.log("proof of type=====>", typeof JSON.parse(JSON.stringify(obj)), "\n\n");