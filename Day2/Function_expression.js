// FUNCTIONAL DECLARATION
function add(x,y){
    return x+y;
}



// FUNCTIONAL EXPRESSION 
let res1 = function(x,y){
    return x+y;
}



// NAMED FUNCTIONAL EXPRESSION
let res2 = function add(x,y){
    return x+y;
}


// FUNCTIONAL EXPRESSIO USING ARROW FUNCTION
let res3 = (x,y)=>{
    return x+y;
}





console.log(add(2,3));
console.log(res1(2,3));
console.log(res2(2,3));
console.log(res3(2,3));
