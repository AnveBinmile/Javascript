// Sample data
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  city: "New York"
};

let jsonString = JSON.stringify(person);
console.log("JSON String:", jsonString);

let parsedPerson = JSON.parse(jsonString);
console.log("Parsed Object:", parsedPerson);

parsedPerson.age = 32;

let modifiedJsonString = JSON.stringify(parsedPerson);
console.log("Modified JSON String:", modifiedJsonString);
