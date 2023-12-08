
const throttline=(func,delay)=>{
    return function(){
        document.getElementById("myId").disabled=true;
        setTimeout(() => {
            func()
        }, delay);
    }

}
const newFunc=throttline(()=>{
    document.getElementById("myId").disabled=false;
    console.log("user clicked...")
},5000)