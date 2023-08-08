const array = [1,2,3,4,5,6];
console.log(array);


const array2 = ['Alice','Bob','Lara'];

const [person1,person2] = array2;

console.log(person1,' ',person2);


const [a,b,...c] = array;

console.log(a,' ',b,c);


