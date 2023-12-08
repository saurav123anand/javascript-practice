// here x is callback function and y is HOF
// function x(){
//     console.log("Namaste")
// }
// function y(x){
//     x();
// }
// y(x);


const area=function(radius){
    return Math.PI*radius*radius;
}
const circumference=function(radius){
    return 2*Math.PI*radius;
}
const diameter=function(radius){
    return 2*radius;
}

// const calculate=function(arr,logic){
//     const output=[];
//     for (const el of arr) {
//        output.push(logic(el)); 
//     }
//     return output;
// }
 const arr=[3,1,2,4];
// console.log(calculate(arr,area));

//using map function instead of custom calculate function 
console.log(arr.map(area));

// how to make calculate function exactly like map function 

Array.prototype.calculate=function(logic){
    const output=[];
    for (const el of this) {
       output.push(logic(el)); 
    }
    return output;
}
console.log(arr.calculate(area));
