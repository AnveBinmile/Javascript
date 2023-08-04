let a=2;
let b=3;
let c=2;

let s="2";

console.log(a==b); //false
console.log(a>b); //false
console.log(a<b) //true
console.log(a==c); //true
console.log(a==s); //true
console.log(a===s); //false;
console.log(a!==b);//true


let number = 3;
if(number<3){
    console.log('Less than 3')
}
else if(number==3){
    console.log('Equal to  3')
}
else{
    console.log('Greater than 3')
}



// (number>=3)?((number>3)?(console.log('Number greater than 3')):('Number equal to 3')):console.log('Number is less than 3');
(number==3)?console.log('Number is equal to 3'):console.log('Number is not equal  to three')