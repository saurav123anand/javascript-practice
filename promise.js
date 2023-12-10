const cart=["shoes","shirt","t-shirt"];

//earlier using callback that was creating callback hell
// createOrder(cart,function(orderId){
//     proceedToPayment(orderId);
// })

//using promise we can avoid callback hell and inversion of control 

// let promise=createOrder(cart);

// promise.then(function(orderId){
//     proceedToPayment(orderId);
// });

//examples

// const GITHUB_API="https://api.github.com/saurav123anand"

// const promise=fetch(GITHUB_API);
// console.log(promise)

//A Promise is an object representing the eventual completion or failure of an asynchronous operation.
// in callback we pass the function as callback but in promise we attach the callback on  promise

// 1. Before promise we used to depend on callback functions which would result in 1.) Callback Hell (Pyramid of doom) | 2.) Inversion of control
// 2. Inversion of control is overcome by using promise.
//   2.1) A promise is an object that represents eventual completion/failure of an asynchronous operation.
//   2.2) A promise has 3 states: pending | fulfilled | rejected.
//   2.3)  As soon as promise is fulfilled/rejected => It updates the empty object which is assigned undefined in pending state.
//   2.4) A promise resolves only once and it is immutable. 
//   2.5) Using .then() we can control when we call the cb(callback) function.

// 3. To avoid callback hell (Pyramid of doom) => We use promise chaining. This way our code expands vertically instead of horizontally. Chaining is done using '.then()'
// 4. A very common mistake that developers do is not returning a value during chaining of promises. Always remember to return a value. This returned value will be used by the next .then()

//earlier using callback 
createOrder(cart,function(orderId){
    proceedToPayment(orderId,function(paymentInfo){
        showOrderSummary(paymentInfo,function(){
            updateWalletBalance();
        })
    })
});

//using promise chain 
createOrder(cart)
.then(function(orderId){
    return proceedToPayment(orderId);
})
.then(function(paymentInfo){
    return showOrderSummary(paymentInfo);
})
.then(function(){
    updateWalletBalance();
})

