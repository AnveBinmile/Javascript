// Constructor function
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  Person.prototype.getFullName = function() {
    return this.firstName + " " + this.lastName;
  };
  
  let person1 = new Person("John", "Doe");
  let person2 = new Person("Alice", "Smith");
  
  console.log("Person 1:", person1.firstName, person1.lastName);
  console.log("Person 2:", person2.firstName, person2.lastName);
  console.log("Person 1 Full Name:", person1.getFullName());
  console.log("Person 2 Full Name:", person2.getFullName());
  