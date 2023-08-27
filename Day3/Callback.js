function calculate(a, b, operation, callback) {
    let result = operation(a, b);
    callback(result);
  }
  
  function add(x, y) {
    return x + y;
  }
  
  function displayResult(result) {
    console.log("Result:", result);
  }
  
  calculate(10, 5, add, displayResult);
  




function step1(callback) {
    console.log("Step 1");
    callback();
  }
  
  function step2(callback) {
    console.log("Step 2");
    callback();
  }
  
  function step3(callback) {
    console.log("Step 3");
    callback();
  }
  
  step1(function() {
    step2(function() {
      step3(function() {
        console.log("All steps completed");
      });
    });
  });
  