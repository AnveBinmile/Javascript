let m= new Map();

m.set('Mango',60);
m.set('Notebook',100);

console.log(m.set('Orange','20'));
console.log(m.get('Mango'));
console.log(m.size);


console.log(m.get('Apple'));

m.delete('Orange');
console.log(m.get('Orange'));



let s= new Set();

s.add('Mango');
s.add(90);
s.add(true);
s.add(false);
s.add({'Orange':90});

s.add({'Apple':'100'},{'Strawberry':100});

console.log(s);

s.delete('Mango');

s.clear();

console.log(s);
