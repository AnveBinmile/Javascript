
function sayHello() {
    console.log("Hello, " + this.name);
  }
  
  let person1 = {
    name: "Alice",
    greet: sayHello
  };
  
  let person2 = {
    name: "Bob",
    greet: sayHello
  };
  
  person1.greet(); 
  person2.greet(); 
  