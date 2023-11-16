// what is a callback function in js 
// setTimeout(() => {
//     console.log("timer");
// }, 5000);

// function x(y){
//     console.log("x");
//     y();
// }
// x(function y(){
//     console.log("y");
// })

//Event listeners
// document.getElementById("clickMe").addEventListener("click",function xyz(){
//     console.log("hello clicked");
// })
// closures with event listeners
function attachEventListeners(){
    let count=0;
    document.getElementById("clickMe").addEventListener("click",function xyz(){
        console.log("hello clicked",++count);
    })
}
// attachEventListeners()