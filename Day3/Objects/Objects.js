// Creating an object
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    occupation: "Engineer"
  };
  
  console.log("First Name:", person.firstName);
  console.log("Last Name:", person["lastName"]);
  console.log("Age:", person.age);
  console.log("Occupation:", person["occupation"]);
  
  person.age = 32;
  person["occupation"] = "Developer";
  
  person.city = "Cityville";
  
  delete person.lastName;
  
  for (let key in person) {
    console.log(key + ": " + person[key]);
  }
  