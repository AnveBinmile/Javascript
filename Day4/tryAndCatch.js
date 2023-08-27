try {
  let result = 10 / 0;
  console.log("Result:", result);
} catch (error) {
  console.error("An error occurred:", error.message);
}

console.log("Program continues...");
