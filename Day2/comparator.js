const arr= [2,5,63,3,2,1,4,693,73];

console.log(arr);

let cmp = (a,b)=>{
    return a-b;
}

arr.sort();

console.log(arr);

const people = [
    {
        name:'ALice',
        age:23
    },
    {
        name:'Bob',
        age:45
    },
    {
        name:'Lara',
        age:89
    }
]

const peopleNew = people.map((item)=>{
    return {...item, name : 'Mr. ' + item.name}
})

console.log(peopleNew);