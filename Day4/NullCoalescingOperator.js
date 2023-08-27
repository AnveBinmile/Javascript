let user = {
    name: "Alice",
    age: null,
    city: undefined
  };
  
  console.log("User name:", user.name ?? "Unknown");
  console.log("User age:", user.age ?? "Age not available");
  console.log("User city:", user.city ?? "City not available");
  