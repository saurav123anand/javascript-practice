// always returns promise --> either you can return promise or if you don't then also it will return promise wrapped with value(here namaste)
// const p=new Promise(function(resolve,reject){
//     setTimeout(() => {
//         resolve("promise resolved value")
//     }, 10000);
   
// })
const p1=new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve("promise resolved value")
    }, 10000);
   
})
const p2=new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve("promise resolved value 2")
    }, 5000);
   
})

// async function getData(){
//     // return "Namaste";
//     return p;
// }
// const data=getData();
// console.log(data)
// data.then(val=>{
//     console.log(val)
// })

// // old way 
// function getData(){
//     p.then(data=>console.log(data))
// }
// getData()

// using async/await
// async function handlePromise(){
//     const val=await p;
//     console.log(val)
// }
// handlePromise()

//difference between async/await and old promise way 
// function getData(){
//     // Js engine will not wait for for promise to be resolved 
//     p.then(data=>console.log(data))
//     console.log("Namaste js ")
// }
// getData()

// using async/await 
// async function handlePromise(){
//     // Js engine will wait for for promise to be resolved 
//     const val=await p;
//     console.log(val)
//     console.log("Namaste js")
// }
// handlePromise()

// here when js will reach await then handlePromise execution get suspended coz js engine doesn't wait for anyone  and again after 10s for p1 will come in stack mandv print 
//and when reach to await p2 then it is already resolved because only 5 sec and will print it 
// async function handlePromise(){
//     console.log("hello world")
//     const val=await p1;
//     console.log(val)
//     console.log("Namaste js")

//     const val2=await p2;
//     console.log(val2)
//     console.log("Namaste js 2")
// }
// handlePromise()

//real world example 
// here in async/await we don't have .catch to handle errors intead we have to do try/catch 
const API_URL="https://com/users/sauav123anand"
async function handlePromise(){
    try{
        const data=await fetch(API_URL);
        const jsonValue=await data.json(); // .json return promise again 
        console.log(jsonValue)
    }
    catch(error){
        console.log("error found")
    }
    // const data=await fetch(API_URL);
    // const jsonValue=await data.json(); // .json return promise again 
    // console.log(jsonValue);
}
handlePromise()
// second way to handle error 
//handlePromise().catch(err=>console.log(err))

    


