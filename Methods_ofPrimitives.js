let number_arr = [10, 20, 30, 40, 50];

number_arr.push(60);

console.log(number_arr);

number_arr.push(70,80,90);

console.log(number_arr);


const str= "Anvesha"
console.log(str.toLocaleUpperCase());

number_arr.shift();
console.log(number_arr); // (8) [20, 30, 40, 50, 60, 70, 80, 90]

number_arr.unshift(1000);
console.log(number_arr);  // (9) [1000, 20, 30, 40, 50, 60, 70, 80, 90]

const n=123.45453;



console.log(n.toFixed(2));

n.toFixed(2);
console.log(n);
console.log(n.toFixed(3));

let numbers= [1,2,3,4];

const sum = numbers.reduce((acc,val)=>{
    return acc+=val;
},0)


console.log(sum);
