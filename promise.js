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
// createOrder(cart,function(orderId){
//     proceedToPayment(orderId,function(paymentInfo){
//         showOrderSummary(paymentInfo,function(){
//             updateWalletBalance();
//         })
//     })
// });

//using promise chain 
// createOrder(cart)
// .then(function(orderId){
//     return proceedToPayment(orderId);
// })
// .then(function(paymentInfo){
//     return showOrderSummary(paymentInfo);
// })
// .then(function(){
//     updateWalletBalance();
// })

// custom promise 

// 1. Promise can be created using a new Promise() constructor function.
// 2. This constructor function takes a callback function as argument. 
// 3. The callback function has 2 arguments named 'resolve' and 'reject'. Resolve and reject are the keywords provided by JS.
// 4. We can only resolve or reject a promise. Nothing else can be done.
// 5. An error can also be created using new Error('error message').
// 6. There is also .catch() which is used to attach a failure callback function that handles any error that pops up during the execution of promise chain.
// 7. .catch only handles error of .then() that are present above it. If there is any .then() below it, catch will not handle any error for that, also that ,then will get executed no matter what.
// 8. It can be useful in a way if we want to catch error for a particular portion of a chain.
// 9. We can have multiple catch based on requirement and then a general catch at the end.
// 10. Always remember to return a value in the promise chain for the next .then to use .
// 11. If it returns a value => It will be  used as an argument in next function. If it is a promise then the next .then in the promise chain is attached to the promise returned by the current callback function.


createOrder(cart).then(function(cartId){
    console.log(cartId)
    return cartId;
})
.then(function(orderId){
    return proceedToPayment(orderId);
})
.then(function(paymentInfo){
    console.log(paymentInfo)
})
.catch(function(err){
    console.log(err.message)
})
.then(function(cartId){
    console.log("no matter what happens i'll definitely run ")
})

function validateCart(cart){
    return true;
}

function proceedToPayment(orderId){
    return new Promise(function(resolve,reject){
        resolve("payment successful with order id "+orderId)
    })
}

function createOrder(cart){
    const pr=new Promise(function(resolve,rejecte){
        //create order
        // validate cart
        //order Id 
        if(!validateCart(cart)){
           const err=new Error("cart is not valid ");
           rejecte(err);
        }
        //logic for create order 
        const orderId="12345";
        if(orderId){
            setTimeout(() => {
                resolve(orderId);
            }, 5000);
            
        }
    })
    return pr;
}






