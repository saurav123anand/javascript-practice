// Implementing memoization in javasScript 
// Memoization is an optimization technique that can be used to reduce time-consuming calculations by saving previous 
// input to something called cache and returning the result from it.

const calc=(n)=>{
    let sum=0;
    for (let i = 1; i <=n; i++) {
        sum+=i;
    }
    return sum;
}

const memoize=(func)=>{
    let cache={};
    return function(...args){
        let n=args[0];
        if(n in cache){
            console.log("cache")
            console.log(cache)
            return cache[n];
        }
        else{
            console.log("calculating for the first time");
            let result=func(n);
            cache[n]=result;
            return result;
        }
    }
}

console.time();
const efficient=memoize(calc);
console.log(efficient(5));
console.timeEnd();

// calling for the second time 
console.time();
console.log(efficient(5));
console.timeEnd();
