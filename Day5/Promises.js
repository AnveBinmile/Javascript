
function resolve(){
    console.log('resolved');
    return "resolved";
}


function reject(){    
    console.log('resolved');

    return "reject"
}


const promise = new Promise(function(resolve,reject){
    let x=2;
    let y=2;

    if(x!==y){
       return  resolve();
    }
    else{
       return  reject();
    }
})


promise.then(function(arg){
    console.log('Success in promise  ',arg);
})
.catch(function(arg){
    console.log('Failure in promise  ',arg);
})



//NAMASTE JAVASCRIPT

//USING CALLBACKS
const cart = ["Apple","Orange","Banana","Peach"];

createOrder(cart,function (orderId){
    proceedToPayment(orderId,function(paymentInfo){
        showOrderSUmmary(paymentInfo,function(){
            updateWalletBalance();
        });
    });
});

//SAME THING USING PROMISES   ===> PROMISE - CHAINING 
createOrder(cart).then(function (orderId){
    proceedToPayment(orderId);
})
.then(function(paymentInfo){
    showOrderSUmmary(paymentInfo);
})
.then(function(paymentInfo){
    updateWalletBalance(paymentInfo)
})





let todos = new Promise((resolve,reject)=>{
    const url = "https://jsonplaceholder.typicode.com/todos/";
    fetch(url).then((result)=>{
        console.log(result);
    })

})