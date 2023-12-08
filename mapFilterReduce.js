// 1. map method is used when we want transformation of whole array.
// 2. filter is used when we want to filter the arrar to obtain required value.
// 3. reduce is used when we want to reduce the array to single value eg (max, min, avg, sum, difference etc).
// 4. reduce passes two arguments one function(which includes accumulator and initial value as argument itself) and another initial value of accumulator.

const arr=[5,1,3,2,6];

function double(x){
    return x*2;
}

// map function 
// const output=arr.map(double);
// const output2=arr.map(function(x){
//     return x*3;
// })
// const output3=arr.map(x=>x.toString(2));
// console.log(output);
// console.log(output2);
// console.log(output3);

// Filter function 

// filter odd values 
// function isOdd(x){
//     return x%2==1;
// }
// const oddValues=arr.filter(isOdd);
// console.log(oddValues)

//Reduce function --> iterate and find the single value out of it.

// sum or max

// first create normal function then we will see benefit of reduce function over this 

// function sum(arr){
//     let sum=0;
//     for (const item of arr) {
//         sum+=item;
//     }
//     return sum;
// }
// console.log(sum(arr))

//using reduce 

const output=arr.reduce(function(acc,curr){
    acc+=curr;
    return acc;
},0)
// here 0 is initial value for acc 
// here acc acts as a sum variable and curr is current value.
console.log(output)

// function maxOfArr(arr){
//     let max=0;
//     for (const item of arr) {
//         max=Math.max(max,item)
//     }
//     return max;
// }
// console.log(maxOfArr(arr))

// using reduce 

const max=arr.reduce(function(acc,curr){
    acc=Math.max(acc,curr);
    return acc;
},0)
console.log(max)