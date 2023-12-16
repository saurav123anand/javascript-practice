const p1=new Promise((resolve,reject)=>{
    setTimeout(() => {
        // resolve("p1 success")
        reject("p1 fails")
    }, 3000);
})
const p2=new Promise((resolve,reject)=>{
    setTimeout(() => {
        //  resolve("p2 success")
         reject("p2 fails")
    }, 1000);
})
const p3=new Promise((resolve,reject)=>{
    setTimeout(() => {
        // resolve("p3 success")
        reject("p3 fails")
    }, 2000);
})

// Promise.all([p1,p2,p3]).then(result=>{
//     console.log(result)
// }).catch(err=>{
//     console.error(err)
// })


// Promise.allSettled([p1,p2,p3]).then(result=>{
//     console.log(result)
// }).catch(err=>{
//     console.error(err)
// })


// Promise.race([p1,p2,p3]).then(result=>{
//     console.log(result)
// }).catch(err=>{
//     console.error(err)
// })

Promise.any([p1,p2,p3]).then(result=>{
    console.log(result)
}).catch(err=>{
    console.error(err)
    console.error(err.errors)
})

