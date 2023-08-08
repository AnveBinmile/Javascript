
function resolve(){
    console.log('resolved');
    return "resolved";
}


function reject(){    console.log('resolved');

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