const date = new Date();

console.log(date);
console.log(date.toString()); 

console.log(date.toDateString());

console.log(date.toLocaleString());

console.log(typeof date); //object 

let myCreateDate1 =  new Date(2023,0,23,5,3);
console.log(myCreateDate1.toLocaleString());

let myCreateDate2 =  new Date("2023-01-2023");
console.log(myCreateDate2.toLocaleString());

let myTimeSTamp = Date.now(); //total time  in millisecs
console.log(myTimeSTamp);

console.log(myCreateDate1.getDate());
console.log(date.getTime(),'  ',Date.now());
console.log(myCreateDate1.getHours());












