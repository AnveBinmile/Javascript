//-------------------------------------------------------- A R R A Y ---------------------------------------------//

//1 .Map()
// 1.1
const numbers = [1, 2, 3, 4, 5];
const square = numbers.map((num) => num * num);

//1.2
const arrSum = (arr) => {
  let total = 0;
  return arr.map((item) => {
    return (total += item), (item = total);
  });
};

const totalSUm = arrSum(numbers)[numbers.length - 1];

//1.3
const users = [
  {
    id: 1,
    name: "Alice",
  },
  {
    id: 2,
    name: "Bob",
  },
  {
    id: 3,
    name: "Lara",
  },
];

const username = users.map((user) => "Hello! " + user.name);
console.log(username);

// 1.4
const newUsers = users.map((user) => ({
  ...user,
  name: user.name + "  is Cool",
}));
console.log(newUsers);

//1.5
const ids = [1, 2, 3, 4, 5, 6];
const fetchALl = (ids) => {
  const promises = ids.map((id) =>
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => res.json())
      .then((item) => item)
  );

  return promises.map((item) => item);
};
const promiseData = fetchALl(ids);
console.log(promiseData);

// 2. Filter

//2.1
const arr1 = [1, 2, 3, 4, 5, 6];
let ans = arr1.filter((item) => item % 2);
console.log(ans);

//2.2
const people = [
  { name: "Alice", age: 20 },
  { name: "Bob", age: 25 },
  { name: "Lara", age: 30 },
];

const newObjArr = people.filter((person) => person.age >= 25);
console.log(newObjArr);

//2.3
const arr2 = [10, 20, 30, 40, 50];
ans = arr2.filter((num, ind, arr) => num % 20 && ind >= 2);
console.log(ans);

//2.4
const arr3 = [1, 3, null, false, 2, 4, NaN, 0, "Alice", true];
ans = arr3.filter((item) => item);
console.log(ans);

//2.5
const arr4 = [10, 20, 30, 40, 60, 75];
ans = arr4.filter((item) => item % 3 === 0 && item % 5 === 0);
console.log(ans);

// 3. Reduce
//3.1
const arr5 = [1, 2, 3, 4, 5];
const value = arr5.reduce((prod, num) => {
  return (prod *= num);
});
console.log(value);

//3.2
const fruits = [
  { name: "Apple", price: 40 },
  { name: "Banana", price: 50 },
  { name: "Orange", price: 60 },
];

const total = fruits.reduce((sum, fruit) => (sum += fruit.price), 0);
console.log(total);

//3.3
const arr6 = [6, 4, 5, 7, 9];
const maxVal = arr6.reduce((maxVal, num) => Math.max(maxVal, num), -Infinity);
console.log(maxVal);

//3.4
const minVal = arr6.reduce((minVal, num) => Math.min(minVal, num), Infinity);
console.log(minVal);

//3.5
const arr7 = [4, 4, 5, 6, 3, 2, 5, 6, 7, 5, 4, 3, 2, 3, 6, 6];
ans = arr7.reduce((acc, item) => {
  if (!acc.includes(item)) {
    acc.push(item);
  }
  return acc;
}, []);

console.log(ans);

// 4. Find

//4.1
const arr8 = ["Mr. Alice", "Dr. Bob", "Prof John", "Ms Lara"];

const doctor = arr8.find((item) => item.includes("Dr"));
console.log(doctor);

//4.2
const employees = [
  {
    name: "Alice",
    post: "admin",
  },
  {
    name: "Bob",
    post: "trainee",
  },
  {
    name: "Lara",
    post: "admin",
  },
];

const emp = employees.find((item) => item.post === "admin");
console.log(emp);

//4.3
const arr9 = [3, 2, undefined, 9, 10];
const nullVal = arr9.find((item) => !item);

//4.4
const nullInd = arr9.findIndex((item) => !item);
console.log(nullVal);
console.log(nullInd);

//4.5
const arr10 = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 32 },
  { name: "Charlie", age: 28 },
  { name: "Amber", age: 35 },
];

ans = arr10.find((item) => {
  return item.name.startsWith("A") && item.age > 25;
});
console.log(ans);

// 5. Some()

// 5.1
const list = [1, 2, 5, 4, 3];
console.log(list.some((item) => item % 4 == 0));
console.log(list.some((item) => item % 3 == 0 && item / 3 !== 1));

// 5.2
const data = [0, false, "", null, undefined, 2];
const hasTruthyVal = data.find((item) => item);
if (hasTruthyVal) {
  console.log("Exists atleast one truthy value");
} else {
  console.log("No Truthy value exists");
}

//6. forEach
// 6.1
const arr11 = [1, 2, 3, 4, 5, 6];
// arr11.forEach((item,ind,arr)=>arr[ind]=item*item);
arr11.forEach((item) => item + 3);
console.log(arr11);

//6.2
const arr12 = [1, 2, 3, 4, 5];
const evenNumbers = [];
numbers.forEach((number) => {
  if (number % 2 === 0) {
    evenNumbers.push(number);
  }
});
console.log(evenNumbers);

//6.3
const arr13 = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 32 },
  { name: "Charlie", age: 28 },
];
arr13.forEach((item) => {
  item.name = "Mr. " + item.name;
});
console.log(arr13);

//6.4
const tasks = ["Task 1", "Task 2", "Task 3"];
function completeTask(task) {
  console.log(`${task} completed`);
}
tasks.forEach(completeTask);

//6.5
const person = {
  name: "Alice",
  age: 30,
};

Object.keys(person).forEach((key) => {
  console.log(`${key}: ${person[key]}`);
});

Object.values(person).forEach((val) => console.log(val));



//7.Slice
//7.1
const arr15 = [1,4,"Alice",true,'9','a',null];
ans=arr15.slice();  //SHALLOW COPY
console.log(ans);


//7.2
ans = arr15.slice(2,5);
console.log(ans);

ans = arr15.slice(0,4);
console.log(ans);


//7.3
ans=arr15.slice(4);
console.log(ans);

ans=arr15.slice(0);
console.log(ans);


//7.4
ans = arr15.slice(-2);
console.log(ans);


//7.5
ans=arr15.slice(2,-2);
console.log(ans);


//8. Splice
// 8.1
const arr16 = [1,2,'Alice',3,'Lara','Sona',7,'Bob',4,5];
arr16.splice(2,4); //remove 4 elem starting frm ind 4
console.log(arr16);

// 8.2
const arr17 = [1,2,'Alice',3,'Lara','Sona',7,'Bob',4,5];
const removedElem = arr17.splice(2,5);
console.log(removedElem);

//8.3
const arr18 = [1,2,'Alice',3,'Lara','Sona',7,'Bob',4,5];
arr18.splice(4);
console.log(arr18);

//8.4
const arr19 = [1,2,'Alice',3,'Lara','Sona',7,'Bob',4,5];
arr19.splice(0);
console.log(arr19);

//8.5
const arr20 = ['apple', 'banana','chiku','tomato', 'cherry'];
arr20.splice(1, 3, 'grape', 'kiwi'); 
console.log(arr20);

//8.6  RE ORDERING elemens of an array
const arr21 = ['b','c','a','d','e'];
arr21.splice(0,0,...arr21.splice(2,1));
console.log(arr21);



// -------------------  S T R I N G --------------------- //



//9. split
//9.1
const str = "This is a sample sentence.";
const words = str.split(" ");
console.log(words);

//9.2
const url = "https://jsonplaceholder.typicode.com/todos";
const components = url.split('/');
console.log(components);


//9.3
const textWithSpaces = "I am    Anvesha     Karn";
const goodText = textWithSpaces.split(" ").filter(word=> word!="").join(" ");
console.log(goodText);



// 10. join

// 10.1 
const arr22 = ['Alice','Bob','Lara','John'];
ans = arr22.join(",");
console.log(ans); // is a string

// 10.2
const arr23 = ['Hello    ',' Anvesha','this','        side.'];
ans = arr23.map((item)=>item.trim()).join(" ");
console.log(ans);



// 11 Trim 

// 11.1
const str2 = "      hey there! Anvesha this side    ";
ans = str2.trim();
console.log(ans);

// 11.2
const str3 = 'Binmile technologies is IT services company based in Noida';
ans = str3.substring(0,20);
console.log(ans);

//11.3
console.log(str3.substring(27,0));  // automatic swapping of start and end index when s > e


//11.4
console.log(str.substring()); //returns string as it is

//11.5
