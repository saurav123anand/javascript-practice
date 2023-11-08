// Hoisting in js 
// Hoisting is a concept that enables us to extract values of variables and functions
// even before initializing/assigning value without getting 
// errors and this happens during the 1st phase (memory creation phase) of the Execution Context.

getName() // printed 
console.log(a) // undefined
console.log(getName)
//console.log(b) // reference error
//getCountry(); // error
//getCountry2(); // error
var a=7;
//let b=0;
function getName(){
    console.log("Namaste js");
}
// var getCountry=()=>{
//     console.log("india")
// }
// var getCountry2=function(){
//     console.log("USA")
// }
