// Call() Method: The call method is basically used to invoke the function with different this object. In JavaScript, 
// this refers to an object. It depends on how we are calling a particular function. In the 
// global scope, this refers to the global object window. Inside function also this refers to the global object window.

// const user1={
//     firstName:"saurav",
//     lastName:"kumar",
//     printDetails:function(country){
//        console.log(this.firstName, country);
//     }
// }
// const user2={
//     firstName:"scooby",
//     lastName:"singh"
// }
// // function borrowing 
// user1.printDetails.call(user2,"India");

// const user1={
//     firstName:"saurav",
//     lastName:"kumar",
// }
// const user2={
//     firstName:"scooby",
//     lastName:"singh"
// }
// let printDetails=function(){
//     console.log(this.firstName);
//  }
// // function borrowing 
// printDetails.call(user2)

// apply method -- it is similar like apply but here we can pass multiple arguments in array instaed of passing one by one 

// const user1={
//     firstName:"saurav",
//     lastName:"kumar",
// }
// const user2={
//     firstName:"scooby",
//     lastName:"singh"
// }
// let printDetails=function(country,state){
//     console.log(this.firstName,country,state);
//  }
// // function borrowing 
// printDetails.apply(user2,["India","Karnataka"])


//Bind--> it's similar like apply but here the difference is instead of directly invoking the original function we first make 
// the copy of the function(means storing in the variable ) and then invoking the copy

// bind is a method on the prototype of all functions in JavaScript. It allows you to create a new function from 
// an existing function, change the new function's this context, and provide any arguments you want the new function
//  to be called with.
const user1={
    firstName:"saurav",
    lastName:"kumar",
}
const user2={
    firstName:"scooby",
    lastName:"singh"
}
let printDetails=function(country){
    console.log(this.firstName,country);
    }
// function borrowing 
const copy=printDetails.bind(user2,"india");
copy()


