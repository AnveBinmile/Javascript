let fruits = ['apple', 'banana', 'orange', 'grape', 'pear'];

fruits.push('kiwi');
console.log(fruits);

let removedFruit = fruits.pop();
console.log(fruits, removedFruit);

let firstFruit = fruits.shift();
console.log(fruits, firstFruit);

fruits.unshift('watermelon');
console.log(fruits);

let slicedFruits = fruits.slice(1, 4);
console.log(slicedFruits);

fruits.splice(2, 1, 'cherry');
console.log(fruits);

let moreFruits = ['pineapple', 'blueberry'];
let allFruits = fruits.concat(moreFruits);
console.log(allFruits);

let indexOrange = fruits.indexOf('orange');
console.log(indexOrange);

let includesBanana = fruits.includes('banana');
console.log(includesBanana);

let fruitsString = fruits.join(', ');
console.log(fruitsString);

let upperCaseFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperCaseFruits);

let longFruits = fruits.filter(fruit => fruit.length > 5);
console.log(longFruits);

let totalLength = fruits.reduce((acc, fruit) => acc + fruit.length, 0);
console.log(totalLength);

fruits.forEach(fruit => console.log(fruit));
