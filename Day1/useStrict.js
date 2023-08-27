"use strict";

undeclaredVar = 10;

function doSomething() {
  console.log("Inside function, this:", this);
}

doSomething();

console.log("Program continues...");
