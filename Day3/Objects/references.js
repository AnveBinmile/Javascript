let personA = {
    name:"Alice",
    age:24
}

let personB = {
    name:'Bob',
    age:34
}

   
//In Objects , Copy works by reference  ==>  SHALLOW COPY
let personC = personA;

console.log(personA);
console.log(personB);
console.log(personC);

personC.name="Lara";


//COPY BY REFERENCE -> Results are same
console.log(personC);
console.log(personA);


//COPY, But not By Reference   => DEEP COPY
Object.assign(personA,personB);

personA.name="ram"

console.log("cheecking for deep copy")

console.log(personA);
console.log(personB);