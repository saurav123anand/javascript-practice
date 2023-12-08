
// it is used to reduce the number of calls and achieved by setTimeOut
let counter=0;
function getData(i){
    console.log("fetching data..."+counter++)
}

let i=0;
function myDebounce(callback,delay){
    let timer;
    return function(){
        if(timer){
            clearTimeout(timer);
        }
        timer=setTimeout(() => {
            callback(i++)
        }, delay);
    }
}

const betterFunction=myDebounce(getData,5000)