class CustomError extends Error {
    constructor(message) {
      this.message = message;
      this.name = "CustomError";
    }
  }
  
  try {
    throw new CustomError("This is a custom error message");
  } catch (error) {
    if (error.name === "CustomError") {
      console.log("Caught custom error:", error.message);
    } else {
      console.log("Caught an error:", error.message);
    }
  }
  