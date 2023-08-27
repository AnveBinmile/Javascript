let colors = ["red", "green", "blue", "yellow"];

console.log("for...of loop:");
for (let color of colors) {
  console.log(color);
}

console.log("for...in loop:");
for (let index in colors) {
  console.log(colors[index]);
}

console.log("forEach loop:");
colors.forEach(function (color) {
  console.log(color);
});
