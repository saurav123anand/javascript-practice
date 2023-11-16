// function x(){
//     let a=7;
//     function y(){
//         console.log(a);
//     }
//     a=100
//     return y;
// }
// const fu=x();
// fu() // returns 100 coz it's not directly refer to value it referes to refernece that is a so it referes the reference of 'a'

// closure + settimeout

// function x(){
//     var i=1;
//     setTimeout(() => {
//         console.log(i);
//     }, 1000);
//     console.log("namaste js")
// }
// x();

// print 1,2,3,4,5 after each one second 

// function x(){
//     for (let index = 1; index <=5; index++) {
//         setTimeout(() => {
//             console.log(index);
//         }, index*1000);    
//     }
//     console.log("namaste js")
// }
// x();

// function x(){
//     for (var index = 1; index <=5; index++) {
//         setTimeout(() => {
//             console.log(index); // always print 6
//         }, index*1000);    
//     }
//     console.log("namaste js")
// }
// x();

// let will fix this issue like above but if interviwer ask to fix this issue using var only then we have to do like this below
// function x(){
//     for (var index = 1; index <=5; index++) {
//         function close(x){
//             setTimeout(() => {
//                 console.log(x); // now created new copy of index everytime when settimout will get called because the function has each copy of index
//             }, index*1000);    
//         }
//         close(index);
       
//     }
//     console.log("namaste js")
// }
// x();

function Counter(){
    var count=0;
    this.increment=()=>{
        count++;
        console.log(count);
    };
    this.decrement=()=>{
        count--;
        console.log(count);
    }
}
var counter1=new Counter();
counter1.increment();
counter1.decrement();
counter1.increment();