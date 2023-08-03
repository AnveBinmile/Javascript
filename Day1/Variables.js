const num=3;///number
const myString = "Hello World!";//string

const myBoolean = true;//bool


const fruits=["Mango","Orange","Banana","Chiku"]; //array
const prices = [20,40,30,90];

console.log('Fruits Array: ',fruits);
console.log('Prices Array: ',prices);

let fruit1={fruit:"Mango",price:"20"}; //object
let fruit2={fruit:"Orange",price:"40"}; //object

console.log(fruit1);
console.log(fruit2);




let personA;
console.log(personA);  //undefined


// console.log(personB);  //Not defined

let personC=null;
console.log(personC); //null


personC="Karn";
console.log(personC); // ==> !??? Non mutable

let x=7;
x=x+7;
x=x+null;
console.log(x); // 14 ==> Interger expression
x*=null;
console.log(x); // 0 

let p=undefined;
let q=5;
console.log(q);
q+=p;
console.log(q);


//IMplicit Coercion
let str= "42" + 32;
console.log(str);

//Explicit Coercion
let strNumber = Number(str);
console.log(strNumber);