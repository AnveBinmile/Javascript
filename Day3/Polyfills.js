if (!Array.prototype.forEach) {
    Array.prototype.forEach = function(callback, thisArg) {
      for (let i = 0; i < this.length; i++) {
        callback.call(thisArg, this[i], i, this);
      }
    };
  }
  
  let numbers = [1, 2, 3, 4, 5];
  
  console.log("Using forEach polyfill:");
  numbers.forEach(function(number, index) {
    console.log("Index:", index, "Number:", number);
  });
  