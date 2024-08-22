var countries = ["Africa", "India", "USA"];

var states = new Array("Maharashtra", "MP", "UP", "UK");

// console.log(countries[2]);
// console.log(states[3]);
// console.log(states.length);
// states.pop();
// console.log(states);

states.unshift("MUMBAI");
states.unshift("MUMB");

console.log(states);

states.shift();
console.log(states);
console.log(states.indexOf("MP"));
console.log(states.lastIndexOf("UP"));
console.log(states.sort());

console.log(Array.from("ABHINAV"));