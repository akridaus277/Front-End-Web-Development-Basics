// let add = function(x,y){
//     return x+y;
// 
//arrow function
console.log("Start Sesi-13-1.js");
let add = (x,y) => {return x+y;};
console.log(add(7,13));

//anonymous function
let numbers = [2,1,3];
numbers.sort(function(a,b){
    console.log("nilai a :",a);
    console.log("nilai b :",b);
    console.log("nilai b-a :",b-a);
    return b-a;
});
console.log(numbers);

let names = ['Tofan','Rahmat','Veve'];
let length = names.map(name => name.length);
console.log(length);
console.log("End Sesi-13-1.js");

