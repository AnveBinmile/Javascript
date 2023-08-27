let user = {
    name: "John",
    address: {
      street: "123 Main St",
      city: "Cityville",
      zip: "12345"
    },
    orders: [
      { id: 1, product: "Widget" },
      { id: 2, product: "Gadget" }
    ]
  };
  
  let cityName = user?.address?.city;
  let orderProduct = user?.orders?.[0]?.product;
  let nonExistentProperty = user?.nonExistent?.property;
  
  console.log("City Name:", cityName);
  console.log("First Order Product:", orderProduct);
  console.log("Non-existent Property:", nonExistentProperty);
  