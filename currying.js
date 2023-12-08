/*Currying in JavaScript transforms a function with multiple arguments into a nested series of functions, each taking a 
single argument Currying helps you avoid passing the same variable multiple times, and it helps you 
create a higher order function.*/

/*
It helps us to create a higher-order function
It reduces the chances of error in our function by dividing it into multiple smaller functions that can handle one responsibility.
It is very useful in building modular and reusable code
It helps us to avoid passing the same variable multiple times
It makes the code more readable
*/ 

//nornal function 
// function addition(a,b,c){
//     return a+b+c;
// }
// console.log(addition(4,6,7))

// using currying 

// function addition(a){
//     return function(b){
//         return function(c){
//             return a+b+c;
//         }
//     }
// }
// const sum=addition(5)(4)(3);
// console.log(sum)

// example 2 

// const obj={
//     firstName:"saurav",
//     lastName:"Kumar"
// }

// function info(obj){
//     return function(userInfo){
//         return obj[userInfo];
//     }
// }
// let result=info(obj)('lastName');
// console.log(result)

//infinite currying 

// console.log(add(4)(5)(6)(7)()) // implement this one 

function add(a){
    return function(b){
        if(b){
            return add(a+b)
        }
        return a;
    }
}
console.log(add(4)(5)(7)(8)())




